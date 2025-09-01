// @ts-nocheck
/*
  yargs CLI to pack or publish @milkshake-ui/vite-plugin as TypeScript source.
  Usage:
    vite-node build_/publish-plugin.ts pack
    vite-node build_/publish-plugin.ts publish --registry https://npm.example.com --tag dev
*/

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, cpSync } from 'node:fs';
import path from 'node:path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const WORKSPACE = '@milkshake-ui/vite-plugin';
const SRC_DIR = path.join(process.cwd(), 'packages', 'vite-plugin');
const STAGE_DIR = path.join(process.cwd(), 'build_', 'staging', 'vite-plugin');

function run(cmd: string, opts: { cwd?: string } = {}) {
  return execSync(cmd, { stdio: 'inherit', ...opts });
}

function runJson(cmd: string) {
  const out = execSync(cmd, { encoding: 'utf8' });
  return JSON.parse(out);
}

function runJsonCwd(cmd: string, cwd: string) {
  const out = execSync(cmd, { encoding: 'utf8', cwd });
  return JSON.parse(out);
}

function getVars() {
  const root = process.cwd();
  const buildDir = path.resolve(root, 'build_');
  const varsPath = path.join(buildDir, 'variables.json');
  return JSON.parse(readFileSync(varsPath, 'utf8'));
}

function ensureDistDir(distDir: string) {
  if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true });
}

function resolveDistDir(vars: any) {
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

function maybeAlignVersion(vars: any) {
  try {
    const pkgPath = path.join(process.cwd(), 'packages', 'vite-plugin', 'package.json');
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

function buildPlugin() {
  run(`npm run build -w ${WORKSPACE}`);
  const dist = path.join(SRC_DIR, 'dist');
  if (!existsSync(dist)) throw new Error('Plugin build failed: dist not found');
}

function rimraf(dir: string) {
  rmSync(dir, { recursive: true, force: true });
}

function stagePublishPackage(version: string) {
  rimraf(STAGE_DIR);
  mkdirSync(STAGE_DIR, { recursive: true });

  // Copy dist
  cpSync(path.join(SRC_DIR, 'dist'), path.join(STAGE_DIR, 'dist'), { recursive: true });

  // Copy docs if present
  for (const f of ['README.md', 'LICENSE', 'LICENSE.md']) {
    const src = path.join(SRC_DIR, f);
    if (existsSync(src)) cpSync(src, path.join(STAGE_DIR, f));
  }

  // Derive publish-ready package.json
  const srcPkg = JSON.parse(readFileSync(path.join(SRC_DIR, 'package.json'), 'utf8')) as any;
  const pubPkg = {
    name: srcPkg.name,
    version,
    description: srcPkg.description,
    type: 'module',
    main: './dist/index.cjs',
    module: './dist/index.mjs',
    types: './dist/index.d.ts',
    exports: {
      '.': {
        types: './dist/index.d.ts',
        import: './dist/index.mjs',
        require: './dist/index.cjs',
        default: './dist/index.mjs',
      },
    },
    sideEffects: false,
    peerDependencies: srcPkg.peerDependencies,
    keywords: srcPkg.keywords,
    author: srcPkg.author,
    license: srcPkg.license,
    repository: srcPkg.repository,
    bugs: srcPkg.bugs,
    homepage: srcPkg.homepage,
  };
  writeFileSync(path.join(STAGE_DIR, 'package.json'), JSON.stringify(pubPkg, null, 2));
}

function packFromStage(distDir: string) {
  ensureDistDir(distDir);
  const result = runJsonCwd(`npm pack --json --pack-destination "${distDir}"`, STAGE_DIR);
  const file = (result?.[0]?.filename || result?.[0] || '').toString();
  if (!file) throw new Error('Could not determine packed filename (stage)');
  return path.join(distDir, path.basename(file));
}

async function main() {
  const vars = getVars();
  const distDir = resolveDistDir(vars);

  await yargs(hideBin(process.argv))
    .scriptName('publish-plugin')
    .command('pack', 'Build and pack @milkshake-ui/vite-plugin into a tarball', (y) => y, () => {
      if (!vars.version) throw new Error('build_/variables.json is missing "version"');
      // Build and stage publish-ready package
      buildPlugin();
      stagePublishPackage(vars.version);
      const tarball = packFromStage(distDir);
      console.log(`Packed ${WORKSPACE} -> ${tarball}`);
    })
    .command(
      'publish',
      'Publish @milkshake-ui/vite-plugin tarball to a registry',
      (y) =>
        y
          .option('registry', { type: 'string' })
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
        // Build and stage publish-ready package (workspace version is informative only)
        buildPlugin();
        stagePublishPackage(vars.version);

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
  const tarball = packFromStage(distDir);
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
