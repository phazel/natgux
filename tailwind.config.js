const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Cheque', ...defaultTheme.fontFamily.serif],
        'body': ['Luthier', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          DEFAULT: '#3c7ee8',
          dark: '#27345e',
        },
        purple: {
          DEFAULT: '#4125a8',
          dark: '#261a54',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
