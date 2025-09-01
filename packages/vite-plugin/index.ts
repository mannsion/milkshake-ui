import path from 'node:path';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const posix = (p: string) => p.replace(/\\/g, '/');

// Resolve an installed package directory (works with workspaces and file:)
function pkgDir(pkg: string) {
	const require = createRequire(import.meta.url);
	const pkgJson = require.resolve(`${pkg}/package.json`, { paths: [process.cwd()] });
	return path.dirname(pkgJson);
}

// Core behavior: map @milkshake-ui/core to its TS source and normalize /@id/ -> /@fs/
function createPlugin() {
	let CORE_DIR = '';
	let CORE_SRC = '';
	try {
		CORE_DIR = pkgDir('@milkshake-ui/core');
		CORE_SRC = posix(path.join(CORE_DIR, 'src'));
	} catch {
		// If not found, plugin still runs; mapping just won't apply
	}

	return {
		name: 'milkshake-source-win-fix',

		resolveId: {
			order: 'pre' as const,
			handler(source: string) {
				// Normalize virtual id paths esbuild may emit on Windows
				if (source.includes('/@id/')) {
					const index = source.indexOf('/@id/');
					const raw = source.slice(index + '/@id/'.length);
					return '/@fs/' + posix(raw);
				}

				// Redirect @milkshake-ui/core to its TS source for local dev
				if (CORE_SRC && (source === '@milkshake-ui/core' || source.startsWith('@milkshake-ui/core/'))) {
					const sub = source === '@milkshake-ui/core' ? '/index.ts' : source.slice('@milkshake-ui/core'.length);
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
					const target = hit ?? base;
					return target.startsWith('/@fs/') ? target : '/@fs/' + target;
				}

				return null;
			},
		},

		config() {
			const allow = CORE_DIR ? [CORE_DIR] : [];
			return {
				resolve: { preserveSymlinks: false },
				optimizeDeps: { exclude: ['@milkshake-ui/core'] },
				ssr: { noExternal: ['@milkshake-ui/core'] },
				server: { fs: { allow } },
			};
		},
	} as const;
}

export function milkshakeSourcePlugin() {
	return createPlugin();
}

export default milkshakeSourcePlugin;
