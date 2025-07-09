/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    // Ignorer les tests Playwright
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.{idea,git,cache,output,temp}/**',
      'tests/**', // Ignorer le dossier tests qui contient les tests Playwright
    ],
    // S'il n'y a pas de fichiers de test, ne pas échouer
    passWithNoTests: true,
  },
});
