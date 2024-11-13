/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B6B',
          hover: '#FF5252',
        },
        secondary: {
          DEFAULT: '#4ECDC4',
          hover: '#45B7D1',
        },
        accent: {
          DEFAULT: '#FFE66D',
          hover: '#FFEEAD',
        },
        background: {
          dark: '#141414',
          light: '#1a1a1a',
        }
      }
    },
  },
  plugins: [],
};