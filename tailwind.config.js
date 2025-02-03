// tailwind.config.js
const daisyui = require('daisyui'); // Import DaisyUI

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // Add DaisyUI as a plugin
  ],
};