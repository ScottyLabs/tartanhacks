const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}')],
  theme: {
    extend: {
      fontFamily: {
        comba: ['Comba', 'sans-serif'],
        futura: ['Futura', 'sans-serif'],
        sfpro: ['sfpro', 'sans-serif'],
        basteleur: ['basteleur', 'serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5%)' },
        },
      },
      colors: {
        purple: '#735fff',
        yellow: '#f2dc00',
        red: '#E41A56',
        blue: '#3A5FF3',
        rippleBlue: '#1028f1',
        black: '#1B1818',
        pink: '#FF70A1',
        white: '#F8F0EE',
      },
    },
  },
  plugins: [],
};
