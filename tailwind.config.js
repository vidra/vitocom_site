/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["http://vitokom.ru/content/*.md", "http://vitokom.ru/layouts/**/*.html"],
  theme: {
    extend: {
          gridTemplateColumns: {
        '5': '10% 20% 40% 20% 10%'
      }

    },
  },
  plugins: [],
}

