import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import webfontDownload from "vite-plugin-webfont-dl";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [preact(), webfontDownload()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
});
