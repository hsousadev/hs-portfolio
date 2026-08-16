import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["gsap", "gsap/ScrollTrigger", "gsap/MotionPathPlugin"],
    exclude: ["lucide-react", "motion", "framer-motion"],
  },
});
