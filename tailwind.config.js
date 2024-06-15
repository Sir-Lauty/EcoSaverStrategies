// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marca: {
          marron: '#4D433D',
          gris: '#525C5A',
          verdeoscuro: '#56877D',
          verdeoscuro_hover: '#76aaa0',
          verde: '#8CCC81',
          verdeclaro: '#BADE57'
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};