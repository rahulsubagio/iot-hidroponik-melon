/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hijo-dark': '#1D4925',
        'hijo-light': '#B3D34C',
        'kuning': '#FFCB5D',
      }
    },
  },
  plugins: [],
}

