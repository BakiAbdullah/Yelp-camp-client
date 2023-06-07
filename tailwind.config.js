/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyansky: "#229CB8",
        seagreen: "#218B82",
        lightblue: "#9AD9DB",
        sailorblue: "#00203FFF",
        mint: "#ADEFD1FF",
        gainsboro: "#E5DBD9",
        darkseagreen: "#98D4BB",
        pink: "#EB96AA",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};

