import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  plugins: [react()],
  base: isVercel ? '/' : '/taller_3/' // Vercel "/" , GitHub Pages "/taller_3/"
});
