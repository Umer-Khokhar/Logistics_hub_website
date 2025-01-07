

/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', "serif"]
      },
      colors: {
        navBlack : '#0a0d10',
        mapColor: '#2d3943',
        fontGray: 'rgb(49, 49, 56)'
      },
    },
  },
  plugins: [],
});