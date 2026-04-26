import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  build: {
    // Desativa sourcemaps em produção (reduz bundle size)
    sourcemap: false,

    // Assets menores que 4KB são inlined como base64 (menos requests HTTP)
    assetsInlineLimit: 4096,

    rollupOptions: {
      output: {
        // Rolldown (Vite 8) exige manualChunks como função, não objeto.
        // Separa vendor e icons do bundle principal para cache de longa duração.
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }
        },
      },
    },
  },
});


