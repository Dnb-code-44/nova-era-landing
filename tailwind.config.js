/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'offwhite': '#FFFDF8',
        'bege': '#F5E6D3',
        'bege-escuro': '#E8D4B8',
        'marrom': '#000000',
        'dourado': '#D4AF37',
        'dourado-escuro': '#B8941E',
        'borda': '#D9C6A5',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
