/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
      }
      ,
      height: {
        "10v": "10vh",
        "90v": "90vh"
      }
    },
  },
  plugins: [],
}
