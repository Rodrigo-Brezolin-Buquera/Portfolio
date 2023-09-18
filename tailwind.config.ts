import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'pink': '#C77373',
      'green': '#4AA5A1',
      'gray-dark': '#2D3748',
      'black': '#050F12',
      'white': '#FFFFFF'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
    }
  },
  plugins: [],
}
export default config
