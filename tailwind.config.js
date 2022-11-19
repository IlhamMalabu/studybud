/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        'main': '#CCD6A6',
        'l-green': '#DAE2B6',
        'm-green': '#5F8D4E',
        'd-green': '#285430',
        'cont': '#E5E3C9'
      }
    }
    
  },
  plugins: [],
}