// vite.config.ts
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const posix = (p: string) => p.replace(/\\/g, '/');

// Find the real folder for a package (works with workspaces/file:)
function pkgDir(pkg: string) {
  const pkgJson = require.resolve(`${pkg}/package.json`, { paths: [process.cwd()] });
  return path.dirname(pkgJson);
}

// ---- inline plugin: source resolver + Windows id normalizer ----
function milkshakeSource() {
  // resolve @milkshake-ui/core → its /src
  let CORE_DIR = '';
  let CORE_SRC = '';
  try {
    CORE_DIR = pkgDir('@milkshake-ui/core');
    CORE_SRC = posix(path.join(CORE_DIR, 'src'));
  } catch {
    // package not installed yet; plugin still works, just won't rewrite
  }

  return {
    name: 'milkshake-source-win-fix',

    // normalize IDs like /@id/V:/... → /@fs/V:/...
    // this runs early enough to affect VE’s resolve lookups
    resolveId(id) {
      if (id.startsWith('/@id/')) {
        const raw = id.slice('/@id/'.length);
        return '/@fs/' + posix(raw);
      }
      // map any @milkshake-ui/core[/...] to /@fs/<abs>/src[/...]
      if (CORE_SRC && (id === '@milkshake-ui/core' || id.startsWith('@milkshake-ui/core/'))) {
        const sub = id === '@milkshake-ui/core' ? '/index.ts' : id.slice('@milkshake-ui/core'.length);
        // try to resolve common suffixes if it's a folder or extensionless
        const base = CORE_SRC + sub;
        const candidates = [
          base,
          base + '.ts',
          base + '.tsx',
          base + '.css.ts',
          base + '.css.tsx',
          base.endsWith('/') ? base + 'index.ts' : base + '/index.ts',
          base.endsWith('/') ? base + 'index.tsx' : base + '/index.tsx',
          base.endsWith('/') ? base + 'index.css.ts' : base + '/index.css.ts',
          base.endsWith('/') ? base + 'index.css.tsx' : base + '/index.css.tsx',
        ];
        const hit = candidates.find((f) => {
          try { return fs.existsSync(f.replace('/@fs/', '')); } catch { return false; }
        });
        // if nothing matched, fall back to treating it like a path under src/
        const target = hit ?? base;
        return target.startsWith('/@fs/') ? target : '/@fs/' + target;
      }
      return null;
    },

    // make sure Vite dev server can read the workspace package dir
    config() {
      const allow = CORE_DIR ? [CORE_DIR] : [];
      return {
        resolve: { preserveSymlinks: false },
        optimizeDeps: { exclude: ['@milkshake-ui/core'] },
        ssr: { noExternal: ['@milkshake-ui/core'] },
        server: { fs: { allow } },
      };
    },
  };
}

// ---- export final config ----
export default defineConfig({
  plugins: [
    vanillaExtractPlugin({ identifiers: 'debug' }), // VE must run
    sveltekit(),
    milkshakeSource(), // <- the fixer
  ],
});
