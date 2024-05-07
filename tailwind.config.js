/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'border-spin': 'border-spin 6s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
  }