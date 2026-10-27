import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Matches your GitHub Pages repository name: https://kreier.github.io/ai/
  base: '/ai/',
  plugins: [
    tailwindcss(),
  ],
});
