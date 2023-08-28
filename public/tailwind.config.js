/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/*.md", "./layouts/**/*.html"],
  theme: {
    extend: {
          gridTemplateColumns: {
        '5': '10% 20% 40% 20% 10%'
      }

    },
  },
  plugins: [],
}

