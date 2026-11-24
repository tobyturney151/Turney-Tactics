import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative asset paths, so the build works at
// https://<user>.github.io/Turney-Tactics/ without hard-coding the repo name.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    // The game embeds its pixel art as data URIs, so the bundle is large.
    chunkSizeWarningLimit: 4000,
  },
});
