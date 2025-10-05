import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { milkshakeSourcePlugin } from "@milkshake-ui/vite-plugin";
import { resolve } from "node:path";

const workspaceRoot = resolve(__dirname, "..", "..");

export default defineConfig({
  plugins: [
    milkshakeSourcePlugin(),
    vanillaExtractPlugin(),
    reactRouter(), 
    tsconfigPaths()
  ],
  server: {
    fs: {
      allow: [workspaceRoot],
    },
  },
});
