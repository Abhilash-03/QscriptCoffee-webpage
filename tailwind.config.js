/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow: {
        shd: "0 0 14px #888"
      },
      fontFamily: {
        tf: "Libre Baskerville"
      },
      backgroundImage: {
        bgimg: "url(/img/menu-bg.jpg)"
      }
    },
  },
  plugins: [],
}

