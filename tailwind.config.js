/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
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
        shadowNav: "-4px 10px 27px #ccc",
      },
      colors: {
        colorSilver: "rgb(107 107 107 /1)",
        colorTextsi: "rgba(0,0,0,0.87)",
        colorInputsi: "rgba(0,0,0,0.55)",
        textsi: "#3e66d5",
        hover: "#0070d1",
        light: "#999",
        light2: "#858585",
        silver: "#7e7e7e",
      },
      backgroundImage: {
        bgLinear: "linear-gradient(rgb(243 243 243 /1),rgb(255 255 255 /1))",
      },
      backgroundColor: {
        footer: "#00439c",
        signIn: "#0070cc",
        signInbtn: "#3e66d5",
        curMonth: "#26254f",
        newGame: "#121314",
        social: "#f5f7fa",
        sonySignIn: "#141414",
      },
      width: {
        75: "75px",
        100: "100px",
        120: "120px",
        200: "200px",
        400: "400px",
        "12%": "12%",
        "55%": "55%",
        "82%": "82%",
        "85%": "85%",
        "90w": "90vw",
        unset: "unset",
      },
      height: {
        "20r": "20rem",
        "26r": "26rem",
        "30r": "30rem",
        56: "56px",
        96: "96px",
        115: "115px",
        750: "750px",
        900: "900px",
        1000: "1000px",
      },
      margin: {
        "2r": "2rem",
        "3r": "3rem",
        "55r": "5.5rem",
        "75r": "7.5rem",
      },
      gridTemplateRows: {
        "2-1": "2fr 1fr",
      },
      gridTemplateColumns: {
        "1-2": "1fr 2fr",
      },
      fontSize: {
        "13p": "13px",
        "15p": "15px",
        "17p": "17px",
        0.875: "0.875rem",
        "1.2r": "1.2rem",
        "1.25r": "1.25rem",
        "1.3r": "1.3rem",
        "1.35r": "1.35rem",
        1.5: "1.5rem",
        "1.75r": "1.75rem",
        "2r": "2rem",
        "2.15r": "2.15rem",
        "2.5r": "2.5rem",
        "2.55r": "2.55rem",
        "2.65r": "2.65rem",
      },
      lineHeight: {
        1.1: "1.1rem",
      },
      gap: {
        "2p": "2px",
      },
      maxHeight: {
        220: "220px",
        550: "550px",
      },
      minHeight: {
        536: "536px",
      },
      maxWidth: {
        65: "65px",
        130: "130px",
        210: "210px",
        400: "400px",
        445: "445px",
        500: "500px",
        550: "550px",
        "80%": "80%",
        "95%": "95%",
      },
      zIndex: {
        1: "1",
      },
      objectPosition: {
        70: "70%",
      },
      padding: {
        28: "28px",
        "0.85r": "0.85rem",
        "7.5r": "7.5rem",
        "0-2r": "0 2rem",
        "2p": "2px",
        "10-2": "10px 2px",
        "14.5-2": "14.5px 2px",
      },
      borderRadius: {
        2: "2rem",
        "4p": "4px",
      },
      outlineWidth: {
        "3p": "3px",
      },
      outlineColor: {
        btn: "#0070cc",
      },
      spacing: {
        "15%": "15%",
        "40%": "40%",
        "70%": "70%",
      },
      scale: {
        1.02: "1.02",
      },
      borderColor: {
        inputsi: "#c8c8c8",
      },
    },
  },
  plugins: [],
};
