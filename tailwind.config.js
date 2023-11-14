/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

// theming dark mode
// https://www.youtube.com/watch?v=0i40IAXXYh4&t=271s

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
    fluidTypography: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '8rem'
      }
    },
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        'responsive-xs': 'var(--font-size-xs)',
        'responsive-sm': 'var(--font-size-sm)',
        'responsive-base': 'var(--font-size-base)',
        'responsive-md': 'var(--font-size-md)',
        'responsive-lg': 'var(--font-size-lg)',
        'responsive-xl': 'var(--font-size-xl)',
        'responsive-2xl': 'var(--font-size-2xl)',
        'responsive-3xl': 'var(--font-size-3xl)'
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
  // corePlugins: {
  //   fontSize: false
  // },
  // plugins: []
  plugins: [require('tailwind-fluid-typography')]
  //require('tailwind-fluid-typography')
};
