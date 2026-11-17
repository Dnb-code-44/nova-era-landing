/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fundo':        '#0F0F0F',
        'card':         '#1A1A1A',
        'card-alt':     '#222222',
        'borda':        '#2A2A2A',
        'dourado':      '#D4AF37',
        'dourado-claro':'#F3E5AB',
        'dourado-escuro':'#B8941E',
        'branco':       '#FFFFFF',
        'cinza-claro':  '#CCCCCC',
        'cinza-medio':  '#888888',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'jakarta':   ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
