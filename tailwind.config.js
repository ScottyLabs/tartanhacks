/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Futura', 'Trebuchet', 'MS', 'Arial', 'sans-serif'],
    },
    extend: {
      // TH 2024 colors
      colors: {
        purple: '#735fff',
        yellow: '#f2dc00',
        pink: '#ff7aa5',
        blue: '#1028f1',
        black: '#1B1818'
      },
      fontFamily: {
        title: ['Comba']
      }
    },
  },
  plugins: [],
};
