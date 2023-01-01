/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // TH 2023 colors
      colors: {
        purple: '#4200ff',
        blue: '#6e9afd',
        yellow: '#fea801',
        beige: '#f7f1e2',
      },
    },
  },
  plugins: [],
};
