/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/app.jsx', './src/components/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('img/main_bg.png')",
        'new-iphone': "url('/img/iphone14.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
    }),
  ],
}
