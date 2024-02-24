/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {},
    },
    fontFamily: {
      Logo: ["Bebas Neue", "sans-serif"],
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};
