/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadowBox: "1px 1px 5px #adadad;",
      },
    },
  },
  plugins: [],
};
