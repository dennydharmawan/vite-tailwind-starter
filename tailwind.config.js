/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

const colors = require('./tailwind.color');

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // corePlugins: { preflight: false },
  // colors: {
  //   inherit: 'inherit',
  //   transparent: 'transparent',
  //   current: 'currentColor',
  //   white: '#FFFFFF',
  //   black: '#000000',
  //   red: {
  //     DEFAULT: "#ffffff"
  //   }
  // },
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        xs: '320px'
      }
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      ...colors
    }
  },
  plugins: []
};
