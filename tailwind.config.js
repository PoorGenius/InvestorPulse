/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#313B4F',
        'secondary': '#020B1E',
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}