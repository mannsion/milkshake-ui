import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';

// Build the plugin as a library for distribution. We output both ESM and CJS.
export default defineConfig({
	plugins: [
		dts({
			tsconfigPath: 'tsconfig.json',
			include: ['index.ts'],
			outDir: 'dist',
			insertTypesEntry: true
		})
	],
	build: {
		lib: {
			entry: resolve(__dirname, 'index.ts'),
			name: 'MilkshakeUiVitePlugin',
			formats: ['es', 'cjs'],
			fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs')
		},
		outDir: 'dist',
		emptyOutDir: true,
		sourcemap: true,
		target: 'es2022',
		rollupOptions: {
			// Keep Vite and Node built-ins external
			external: ['vite', 'fs', 'path', 'module', /^node:.*/],
			// Avoid default+named export interop warning for CJS output
			output: {
				exports: 'named'
			}
		}
	}
});
