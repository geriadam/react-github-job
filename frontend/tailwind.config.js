/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.lightBlue,
      green: colors.green,
      red: colors.red,
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'bleed-blue': '#3B82F6',
      }
    },
  },
  plugins: [],
};