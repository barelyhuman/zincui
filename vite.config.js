import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
});
