import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
const { resolve } = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    react(),
  ],
  build: {
    target: "es2015",
    polyfillDynamicImport: false,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "rgb(51,51,51)",
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "style",
        replacement: resolve(__dirname, "src/style"),
      },
      {
        find: "utils",
        replacement: resolve(__dirname, "src/utils"),
      },
      {
        find: "pages",
        replacement: resolve(__dirname, "src/pages"),
      },
      {
        find: "components",
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: "@quarkunlimit/qu-mobx",
        replacement: "@quarkunlimit/qu-mobx/dist/index.js",
      },
    ],
  },
  base: "/",
  server: {
    port: 6769,
    host: "0.0.0.0",
  },
});
