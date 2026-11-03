/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        roxoFundo: '#0f0a1c',
        roxoCard: '#160d29',
        roxoPrincipal: '#8b5cf6',
        roxoVibrante: '#a855f7',
        roxoDestaque: '#c084fc',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
