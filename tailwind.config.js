/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
    theme: {
        extend: {},
        colors: {
          blue: '#1a56db',
          blue_ligth: '#6c9aff',
           green: '#17b0bd',
           orange: '#fdba8c',
           gray: '#6b7280',
          ...colors,
        }
    },
    plugins: [],
}