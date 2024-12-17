// 配置 Vite 輸出為 Chrome Extension
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "src/content.tsx",
      output: {
        entryFileNames: "content.js",
      },
    },
  },
});
