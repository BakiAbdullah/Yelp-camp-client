
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
        creamYellow: "#F7E6C4",
        darkAmber: "#FF8400",
        lightAmber: "#E57C23",
        chocolate: "#967E76",
      },
      fontFamily: {
        gasoek: ["Gasoek One", "sans-serif"],
        archivo: ["Archivo Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};

