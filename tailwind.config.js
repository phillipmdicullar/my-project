/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        theme: '#2A2A2A'
      },
      fontFamily:{
        mont : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}