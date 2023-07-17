/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      lightGray: "rgb(var(--color-light-gray) / <alpha-value>)",
      green: "rgb(var(--color-green) / <alpha-value>)",
      lightGreen: "rgb(var(--color-light-green) / <alpha-value>)",
      lightPink: "rgb(var(--color-light-pink) / <alpha-value>)",
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
        1: "1px",
      },
      minWidth: {
        0: "0",
        6: "6rem",
      },
      spacing: {
        18: "4.5rem",
      },
      opacity: {
        85: ".85",
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [],
};
