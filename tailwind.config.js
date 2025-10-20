/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vintage: {
          sepia: '#F4E5C2',
          dark: '#3E2C1D',
          brown: '#6B4423',
          gold: '#D4AF37',
          yellow: '#FFD700',
          blue: '#4A90E2',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        display: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
};
