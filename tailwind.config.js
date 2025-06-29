/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html", 
    "./_posts/**/*.{md,markdown}",
    "./*.{html,markdown}",
    "./_pages/**/*.{md,markdown}",
    "./about.markdown",
    "./index.markdown"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
