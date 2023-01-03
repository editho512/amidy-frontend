/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#40916c',
        primaryDark: '#2d6a4f',
        primaryLight: '#52b788',
        secondary: '#dad7cd',
        third: '#181f1c'
      },
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif'],
        'graffiti': ['Graffiti font', 'sans-serif']
    },
    },
  },
  plugins: [],
}
