/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    screens: {
      mp: "375px",
      sm: "640px",
    },

    extend: {
      backgroundImage: {
        hero: "url('../img/antique-cafe-bg-01.jpg')",
        zero: "url('../img/antique-cafe-bg-02.jpg')",
        nero: "url('../img/antique-cafe-bg-03.jpg')",
        xero: "url('../img/antique-cafe-bg-04.jpg')",
      },
    },
  },
  plugins: [],
};
