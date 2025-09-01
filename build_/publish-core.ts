// @ts-nocheck
/*
  yargs CLI to pack or publish @milkshake-ui/core as TypeScript source.
  Usage examples:
    vite-node build_/publish-core.ts pack
    vite-node build_/publish-core.ts publish --registry https://npm.example.com --tag dev
*/

import { execSync } from 'node:child_process';
import { readFileSync, mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const WORKSPACE = '@milkshake-ui/core';

/**
 * @typedef {{ version: string; tag?: string; distDir?: string }} Vars
 */

function run(cmd: string, opts: { cwd?: string } = {}) {
  return execSync(cmd, { stdio: 'inherit', ...opts });
}

function runJson(cmd: string) {
  const out = execSync(cmd, { encoding: 'utf8' });
  return JSON.parse(out);
}

function getVars(): Vars {
  const root = process.cwd();
  const buildDir = path.resolve(root, 'build_');
  const varsPath = path.join(buildDir, 'variables.json');
  return JSON.parse(readFileSync(varsPath, 'utf8')) as Vars;
}

function ensureDistDir(distDir: string) {
  if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true });
}

function resolveDistDir(vars: Vars) {
  return path.resolve(process.cwd(), vars.distDir || 'build_/dist/npm');
}

function fetchPublishedVersions(registry: string): string[] {
  try {
    const out = execSync(`npm view ${WORKSPACE} versions --registry ${registry} --json`, { encoding: 'utf8' });
    const parsed = JSON.parse(out);
    if (Array.isArray(parsed)) return parsed.map(String);
    if (typeof parsed === 'string') return [parsed];
    return [];
  } catch {
    return [];
  }
}

function maybeAlignVersion(vars: Vars) {
  try {
    const pkgPath = path.join(process.cwd(), 'packages', 'core', 'package.json');
    /** @type {{version:string}} */
    let meta = JSON.parse(readFileSync(pkgPath, 'utf8'));
    if (vars.version && meta.version !== vars.version) {
      run(`npm version ${vars.version} --no-git-tag-version -w ${WORKSPACE}`);
    }
  } catch {}
}

function isRequestedVersionPublished(registry: string, requested: string): boolean {
  try {
    const published = new Set(fetchPublishedVersions(registry));
    return published.has(requested);
  } catch {
    return false;
  }
}

function doPack(distDir: string) {
  ensureDistDir(distDir);
  const result = runJson(`npm pack --workspace ${WORKSPACE} --json --pack-destination "${distDir}"`);
  const file = (result?.[0]?.filename || result?.[0] || '').toString();
  if (!file) throw new Error('Could not determine packed filename');
  return path.join(distDir, path.basename(file));
}

async function main() {
  const vars = getVars();
  const distDir = resolveDistDir(vars);

  await yargs(hideBin(process.argv))
    .scriptName('publish-core')
    .command(
      'pack',
      'Pack @milkshake-ui/core into a tarball',
      (y) => y,
      () => {
        maybeAlignVersion(vars);
        const tarball = doPack(distDir);
        console.log(`Packed ${WORKSPACE} -> ${tarball}`);
      }
    )
    .command(
      'publish',
      'Publish @milkshake-ui/core tarball to a registry',
      (y) =>
        y.option('registry', { type: 'string' })
          .option('tag', { type: 'string' })
          .option('dry-run', { type: 'boolean' })
          .option('force', { type: 'boolean' }),
      (argv) => {
        const registry = String(process.env.REGISTRY || argv.registry || '');
        if (!registry) throw new Error('REGISTRY env var or --registry is required');
        const tag = String(process.env.TAG || argv.tag || vars.tag || 'dev');
        const dryRun = Boolean(process.env.DRY_RUN || argv['dry-run']);
        const force = Boolean(process.env.FORCE || argv['force']);

        if (!vars.version) throw new Error('build_/variables.json is missing "version"');
        maybeAlignVersion(vars);

        // Ensure the package.json version now matches the requested version
        const pkgPath = path.join(process.cwd(), 'packages', 'core', 'package.json');
        const meta = JSON.parse(readFileSync(pkgPath, 'utf8')) as { version: string };
        if (meta.version !== vars.version) {
          throw new Error(`Workspace version (${meta.version}) does not match requested version (${vars.version}).`);
        }

        const already = isRequestedVersionPublished(registry, vars.version);
        if (already && !force) {
          throw new Error(
            `Version ${vars.version} is already published for ${WORKSPACE}. Update build_/variables.json "version" or pass --force (dev registries only).`
          );
        }
        if (already && force) {
          const unpubCmd = `npm unpublish ${WORKSPACE}@${vars.version} --registry ${registry} --force`;
          if (dryRun) {
            console.log(`[dry-run] ${unpubCmd}`);
          } else {
            try {
              run(unpubCmd);
              console.log(`Unpublished ${WORKSPACE}@${vars.version} from ${registry}`);
            } catch (e) {
              console.warn(`Unpublish failed or not permitted, continuing: ${(e as Error)?.message || e}`);
            }
          }
        }
        const tarball = doPack(distDir);
        const publishCmd = `npm publish "${tarball}" --registry ${registry} --tag ${tag} --access public${dryRun ? ' --dry-run' : ''}`;
        run(publishCmd);
        console.log(`Published ${WORKSPACE} to ${registry} with tag ${tag}${dryRun ? ' (dry-run)' : ''}`);
      }
    )
    .demandCommand(1)
    .strict()
    .help()
    .parseAsync();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
