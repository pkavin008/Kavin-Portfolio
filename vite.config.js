import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  base: '/Kavin-Portfolio/',
  plugins: [
    react(),
    legacy({ targets: ['defaults', 'not IE 11'] }),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 75 },
      webp: { quality: 80 },
      avif: { quality: 70 },
      svg: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'sortAttrs' },
        ],
      },
      includePublic: true,
      logStats: true,
      ansiColors: true,
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1500, // Increase warning threshold to 1.5 MB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0];
          }
        },
      },
    },
  },
});
