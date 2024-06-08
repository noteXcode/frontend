/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        colors: {
            ...colors
        },
        extend: {
            colors: {
                'custom-primary': {
                    '50': '#eff7ff',
                    '100': '#daecff',
                    '200': '#bedeff',
                    '300': '#6c9aff',
                    '400': '#5eadfc',
                    '500': '#388af9',
                    '600': '#226cee',
                    '700': '#1a56db',
                    '800': '#1c46b1',
                    '900': '#1c3e8c',
                    '950': '#162755',
                },
                'custom-gray': {
                    '50': '#f7f8f8',
                    '100': '#edeef1',
                    '200': '#d8dbdf',
                    '300': '#b6bac3',
                    '400': '#8e95a2',
                    '500': '#6b7280',
                    '600': '#5b616e',
                    '700': '#4a4e5a',
                    '800': '#40444c',
                    '900': '#383a42',
                    '950': '#25272c',
                },
            }
        }
    },
    plugins: [],
}