import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import daisyui from 'daisyui';

export default defineConfig({
  plugins: [],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
       
      ],
    },
  },
});