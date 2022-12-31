/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./../*.index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
    },
    extend: {
      one: "url('../img/antique-cafe-bg-01.jpg')",
      two: "url('../img/antique-cafe-bg-02.jpg')",
      three: "url('../img/antique-cafe-bg-03.jpg')",
      four: "url('../img/antique-cafe-bg-04.jpg')",
    },
  },
  plugins: [],
};
