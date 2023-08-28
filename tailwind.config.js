/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["https://github.com/vidra/vitocom_site/content/*.md", "https://github.com/vidra/vitocom_site/layouts/**/*.html"],
  theme: {
    extend: {
          gridTemplateColumns: {
        '5': '10% 20% 40% 20% 10%'
      }

    },
  },
  plugins: [],
}

