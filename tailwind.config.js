/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#F6F1E9",
        lightGray: "#B0A4A4",
        darkGray: "#454545",
        creamYellow: "#F1C376",
        darkAmber: "#FF8400",
        lightAmber: "#F97B22",
        chocolate: "#4F200D",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

