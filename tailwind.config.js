/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{html,js}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily:{
        display:  "'Playfair Display'"
      }
    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin') ],
  // presets: [keepPreset],
 
}

// font-family: 'Archivo Black', sans-serif;
// font-family: 'Geologica', sans-serif;
// font-family: 'Great Vibes', cursive;
// font-family: 'Libre Caslon Text', serif;
// font-family: 'Mea Culpa', cursive;
// font-family: 'Playfair Display', serif;