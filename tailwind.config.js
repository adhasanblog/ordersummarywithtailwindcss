const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        "'Red Hat Display', sans-serif"
      ],
    },
    extend: {
      backgroundImage: them => ({
        'vector': "url('img/bg1.svg')",
        'mobile': "url('img/bg-mobile.svg')",
      }),
      colors: {
        blue: {
          400: '#E0E8FF',
          300: 'hsl(223, 47%, 23%)',
          200: 'hsl(245, 75%, 52%)',
          100: 'hsl(225, 100%, 98%)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
