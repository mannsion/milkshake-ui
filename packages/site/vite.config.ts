import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import milkshakeSourcePlugin from '@milkshake-ui/vite-plugin';


export default defineConfig({
  plugins: [
    vanillaExtractPlugin({
      identifiers: 'short'
    }),
    sveltekit(),
    milkshakeSourcePlugin(),
  ],
  // Optimize CSS loading
  css: {
    devSourcemap: true
  },
  // Server-side rendering configuration
  ssr: {
    noExternal: ['@vanilla-extract/css']
  }
});
