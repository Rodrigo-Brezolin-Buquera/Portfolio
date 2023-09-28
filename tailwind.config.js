/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#C77373',
        'pink-light': '#DF7A7A',
        'cyan': '#4AA5A1',
        'cyan-dark': '#2F8784', 
        'gray-dark': '#2D3748',
        'black': '#050F12',
        'white': '#FFFFFF'
      },
    },
  },
  plugins: [],
}
