import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import type { PluginOption } from 'vite';

// Development plugins (empty in production by default)
const devPlugins: PluginOption[] = [];

// Export the Vite config
export default defineConfig({
  plugins: [react(), ...devPlugins],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@assets': path.resolve(__dirname, 'attached_assets'),
    },
  },
  root: path.resolve(__dirname, 'client'),
  build: {
    outDir: path.resolve(__dirname, 'client/dist'),
    emptyOutDir: true,
    sourcemap: process.env.NODE_ENV !== 'production',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
