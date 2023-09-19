/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"

  ],
  theme: {
    extend: {
      colors: {
        'pink': '#C77373',
        'green': '#4AA5A1',
        'gray-dark': '#2D3748',
        'black': '#050F12',
        'white': '#FFFFFF'
      },
    },
  },
  plugins: [],
}
