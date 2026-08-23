import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === "github-pages" ? "/websnaefell/" : "/",
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
}));
