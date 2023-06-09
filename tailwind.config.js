
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#F6F1E9",
        lightGray: "#B0A4A4",
        pink: "#FFF4F4",
        darkGray: "#454545",
        creamYellow: "#E8AA42",
        darkAmber: "#FF8400",
        lightAmber: "#E57C23",
        chocolate: "#884A39",
      },
      fontFamily: {
        gasoek: ["Gasoek One", "sans-serif"],
        archivo: ["Archivo Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};

