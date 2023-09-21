/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/content/*.md", "/content/**/*.md", "/layouts/**/*.html"],
  theme: {
    extend: {
          gridTemplateColumns: {
        '5': '10% 20% 40% 20% 10%'
      },
       backgroundImage: {
         'hero-pattern': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('/src/img_foot.png')",
      },

    },
  },
  plugins: [],
}

