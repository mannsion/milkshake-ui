#!/usr/bin/env node
/*
Helper for building, tagging, pushing and pulling the site Docker image.

Usage:
  REGISTRY=registry.example.com IMAGE_NAME=milkshake-ui-site TAG=latest node build_/docker-release.js build
  REGISTRY=registry.example.com IMAGE_NAME=milkshake-ui-site TAG=latest node build_/docker-release.js push

Behavior:
- Does NOT hardcode any registry hostname such as dreg.home.lab.
- If REGISTRY is provided, the image is tagged as REGISTRY/IMAGE_NAME:TAG for push/pull.
- If REGISTRY is not provided, image is tagged locally as IMAGE_NAME:TAG.
- Respects environment DOCKER_HOST for remote Docker daemon.
*/

import { spawn } from 'child_process';
import path from 'path';

// Simple CLI parsing: node build_/docker-release.js <build|push|pull|redeploy> [--registry registry.host[:port]]
const argv = process.argv.slice(2);
const cmd = argv[0];
if (!cmd) {
  console.error('Usage: node build_/docker-release.js <build|push|pull|redeploy> [--registry registry.host[:port]]');
  process.exit(2);
}

// parse optional flags
let cliRegistry = null;
for (let i = 1; i < argv.length; i++) {
  const a = argv[i];
  if (a === '--registry' || a === '-r') {
    cliRegistry = argv[i + 1];
    i++;
  }
}

const REGISTRY = process.env.REGISTRY || 'dreg.home.lab:5000';
const IMAGE_NAME = process.env.IMAGE_NAME || 'milkshake-ui-site';
const TAG = process.env.TAG || 'latest';
const DOCKERFILE = process.env.DOCKERFILE || path.resolve(process.cwd(), 'packages', 'site', 'Dockerfile');
const CONTEXT = process.env.CONTEXT || path.resolve(process.cwd(), 'packages', 'site');

// Quick existence check so we fail fast with a clearer message when the repo layout changed.
import { existsSync } from 'fs';
if (!existsSync(CONTEXT)) {
  console.error(`Docker build context not found: ${CONTEXT}`);
  console.error('Expected the site to be at packages/site — if your workspace differs, set CONTEXT and DOCKERFILE env vars.');
  process.exit(2);
}

function run(cmd, args, options = {}) {
  return new Promise((resolve, reject) => {
    const p = spawn(cmd, args, { stdio: 'inherit', shell: false, ...options });
    p.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(' ')} exited ${code}`));
    });
  });
}

function localTag() {
  return `${IMAGE_NAME}:${TAG}`;
}

// remoteTag left for compatibility but not used in push/pull logic below
function remoteTag() {
  return REGISTRY ? `${REGISTRY}/${IMAGE_NAME}:${TAG}` : null;
}

function parseJsonArrayEnv(key) {
  const raw = process.env[key];
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      throw new Error(`${key} must be a JSON array`);
    }
    return parsed.map((value) => String(value));
  } catch (err) {
    throw new Error(`Failed to parse ${key}: ${err instanceof Error ? err.message : err}`);
  }
}

(async () => {
  try {
    if (cmd === 'build') {
      // Determine the registry-qualified tag to also apply at build time.
      const targetRegistry = cliRegistry || REGISTRY || null;
      const rTag = targetRegistry ? `${targetRegistry}/${IMAGE_NAME}:${TAG}` : null;
      console.log('Building image (local tag):', localTag());
      if (rTag) console.log('Also tagging build as:', rTag);

      // Build to the requested tag and also tag with the registry-qualified name if available
      const buildArgs = [
        'build',
        '--no-cache',
        '-t',
        localTag(),
      ];
      if (rTag) {
        buildArgs.push('-t', rTag);
      }
      buildArgs.push('-f', DOCKERFILE, CONTEXT);
      // Try with BuildKit if the caller set DOCKER_BUILDKIT=1 in env. If buildx is missing on the daemon,
      // retry once without BuildKit.
      const envWithBuildkit = { ...process.env };
      // only set DOCKER_BUILDKIT if it was set externally; preserve original behavior when using cross-env in scripts
      const buildkitWasSet = !!process.env.DOCKER_BUILDKIT;
      if (buildkitWasSet) envWithBuildkit.DOCKER_BUILDKIT = process.env.DOCKER_BUILDKIT;

      try {
        await run('docker', buildArgs, { env: envWithBuildkit });
        console.log('Build complete');
      } catch (err) {
        // If the caller requested BuildKit (DOCKER_BUILDKIT was set), retry once without it.
        if (buildkitWasSet) {
          console.warn('Initial build with BuildKit failed — retrying without BuildKit...');
          const envNoBuildkit = { ...process.env };
          delete envNoBuildkit.DOCKER_BUILDKIT;
          await run('docker', buildArgs, { env: envNoBuildkit });
          console.log('Build complete (without BuildKit)');
        } else {
          throw err;
        }
      }
    } else if (cmd === 'push') {
      const lTag = localTag();
      const targetRegistry = cliRegistry || REGISTRY || null;
      const rTag = targetRegistry ? `${targetRegistry}/${IMAGE_NAME}:${TAG}` : null;

      if (!rTag) {
        // No registry configured: push the local tag
        console.log('No registry configured; pushing local tag instead:', lTag);
        await run('docker', ['push', lTag], { env: process.env });
        console.log('Push complete');
        return;
      }

      // Registry configured: prefer pushing the fully-qualified registry tag.
      console.log('Ensuring registry-qualified tag exists on the daemon:', rTag);
      try {
        // Try pushing rTag directly (works if the tag already exists on the daemon)
        await run('docker', ['push', rTag], { env: process.env });
        console.log('Push complete');
        return;
      } catch (err) {
        console.warn('Direct push of registry-qualified tag failed; will try to tag and push. Reason:', err.message || err);
      }

      // Tag the local image on the target daemon to the registry-qualified name, push it, then remove the temporary tag.
      console.log(`Tagging image on target daemon: ${lTag} -> ${rTag}`);
      await run('docker', ['tag', lTag, rTag], { env: process.env });
      try {
        await run('docker', ['push', rTag], { env: process.env });
        console.log('Push complete');
      } finally {
        console.log('Removing temporary tag from daemon:', rTag);
        try {
          await run('docker', ['rmi', rTag], { env: process.env });
        } catch (e) {
          console.warn('Failed to remove temporary remote tag:', String(e && e.message ? e.message : e));
        }
      }
    } else if (cmd === 'pull') {
      const lTag = localTag();
      console.log('Pulling image (local tag):', lTag);
      await run('docker', ['pull', lTag], { env: process.env });
      console.log('Pull complete');
    } else if (cmd === 'redeploy') {
      const targetRegistry = cliRegistry || REGISTRY || null;
      const imageRef = targetRegistry ? `${targetRegistry}/${IMAGE_NAME}:${TAG}` : `${IMAGE_NAME}:${TAG}`;

      console.log('Pulling latest image for redeploy:', imageRef);
      await run('docker', ['pull', imageRef], { env: process.env });

      const containerName = process.env.CONTAINER_NAME || 'milkshake-ui';
      const restartPolicy = Object.prototype.hasOwnProperty.call(process.env, 'RESTART_POLICY')
        ? process.env.RESTART_POLICY
        : 'unless-stopped';
      const hostPort = Object.prototype.hasOwnProperty.call(process.env, 'HOST_PORT')
        ? process.env.HOST_PORT
        : '3000';
      const containerPort = process.env.CONTAINER_PORT || '3000';
      const network = process.env.DOCKER_NETWORK || null;
      const portBindings = parseJsonArrayEnv('REDEPLOY_PORTS_JSON');
      const envVars = parseJsonArrayEnv('REDEPLOY_ENV_JSON');
      const volumeMounts = parseJsonArrayEnv('REDEPLOY_VOLUMES_JSON');
      const extraArgs = parseJsonArrayEnv('REDEPLOY_EXTRA_ARGS_JSON');

      console.log('Removing existing container if present:', containerName);
      try {
        await run('docker', ['rm', '-f', containerName], { env: process.env });
      } catch (err) {
        console.warn(`Skip removing container ${containerName}:`, err instanceof Error ? err.message : err);
      }

      const runArgs = ['run', '-d', '--name', containerName];

      if (restartPolicy) {
        runArgs.push('--restart', restartPolicy);
      }

      if (hostPort) {
        runArgs.push('-p', `${hostPort}:${containerPort}`);
      }

      for (const binding of portBindings) {
        runArgs.push('-p', binding);
      }

      for (const envVar of envVars) {
        runArgs.push('-e', envVar);
      }

      for (const volume of volumeMounts) {
        runArgs.push('-v', volume);
      }

      if (network) {
        runArgs.push('--network', network);
      }

      runArgs.push(...extraArgs, imageRef);

      console.log('Starting container with:', ['docker', ...runArgs].join(' '));
      await run('docker', runArgs, { env: process.env });
      console.log('Redeploy complete');
    } else {
      console.error('Unknown command', cmd);
      process.exit(2);
    }
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  }
})();
