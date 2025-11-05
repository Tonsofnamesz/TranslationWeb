/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <== this is important
  ],
  theme: {
    extend: {
      fontFamily: {
      afacad: ['Afacad', 'sans-serif'],
      playfair: ['Playfair Display', 'serif'],
    },
    },
  },
  plugins: [],
};


