/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "390px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {
      boxShadow: {
        shadowBox: "1px 1px 5px #adadad",
        gameSd: "0 0.75rem 8px rgb(0 0 0 / 18%)",
        cardSd: "0 4px 8px 0 rgb(0 0 0 /0.8)",
        cardSd2: "0 4px 16px 0 rgb(0 0 0 /0.8)",
        socialCardSd: "0 4px 8px 0 rgb(0 0 0 /0.16)",
        socialCardSd2: "0 4px 16px 0 rgb(0 0 0 /0.16)",
      },
    },
  },
  plugins: [],
};
