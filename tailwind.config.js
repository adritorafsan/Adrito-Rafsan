/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins','sans-serif'],
      },
      colors:{
        bgcolor: '#fcfcfb',
        primary:'#272d36',
        
      }
    },
  },
  plugins: [],
}

