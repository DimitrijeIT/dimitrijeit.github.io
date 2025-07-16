import { defineConfig } from 'vite';

export default defineConfig({
  base: '/personal_cv/', // Set to your repo name
  build: {
    target: 'es2015', // Better browser compatibility
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined, // Disable code splitting for GitHub Pages
      }
    }
  }
});
