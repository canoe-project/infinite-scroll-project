/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        listReset: {
          "0%": { transform: "rotate(0deg)" },
        },
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
