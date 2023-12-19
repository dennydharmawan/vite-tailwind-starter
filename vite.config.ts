import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import generouted from '@generouted/react-router/plugin';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [svgr(), generouted(), react()]
});
