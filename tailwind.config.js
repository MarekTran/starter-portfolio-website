/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./components/**/*.{js,vue,ts}",
  //   "./layouts/**/*.vue",
  //   "./pages/**/*.vue",
  //   "./plugins/**/*.{js,ts}",
  //   "./app.vue",
  //   "./error.vue",
  // ],
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
          'border-spin': 'border-spin 5s linear infinite',
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      // ...
    ],
  }