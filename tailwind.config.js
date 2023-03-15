const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        stickNoBills: ['var(--stick-no-bills-font)', ...fontFamily.sans],
        ramportOne: ['var(--ramport-one-font)', ...fontFamily.sans],
        luckiestGuy: ['var(--luckiest-guy-font)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
