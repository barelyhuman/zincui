import { defineConfig } from "vite";
import { adex } from "adex";
import preact from "@preact/preset-vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [adex(), preact()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
});
