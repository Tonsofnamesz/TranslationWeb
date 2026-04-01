/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <== this is important
  ],
  theme: {
    extend: {
      fontFamily: {
      playfair: ['"Playfair Display"', 'serif'],
      montserrat: ['"Montserrat"', 'serif'],
      afacad: ['Afacad', 'sans-serif'],      
    },
    },
  },
  plugins: [],
};


