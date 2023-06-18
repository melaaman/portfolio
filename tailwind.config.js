/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      lemon: "rgb(var(--color-lemon) / <alpha-value>)",
      grape: "rgb(var(--color-grape) / <alpha-value>)",
      fuschia: "rgb(var(--color-fuschia) / <alpha-value>)",
      blue: "rgb(var(--color-blue) / <alpha-value>)",
      lightGray: "rgb(var(--color-light-gray) / <alpha-value>)",
      cream: "rgb(var(--color-cream) / <alpha-value>)",
      black: "black",
      white: "white",
      red: {
        default: colors.red["500"],
        100: colors.red["100"],
        300: colors.red["300"],
        700: colors.red["700"],
      },
    },
    extend: {
      borderWidth: {
        1: "1.5px",
      },
      minWidth: {
        0: "0",
        6: "6rem",
      },
    },
  },
  plugins: [],
};
