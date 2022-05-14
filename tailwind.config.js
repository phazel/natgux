const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Cheque', ...defaultTheme.fontFamily.serif],
        'body': ['BebasNeue', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        grey: '#D9D9D9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
