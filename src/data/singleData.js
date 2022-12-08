import currentMonthBg from "../assets/image/this-month.jpg";

import theLast from "../assets/image/the-last-of.jpg";
import theLastLogo from "../assets/image/the-last-of-logo.png";

export const currentMonthIntro = {
  image: currentMonthBg,
  contents: {
    title: "THIS MONTH",
    subTitle: "ON PLAYSTATION",
    content:
      "Check out this month's biggest releases along with dedicated features, guides and more.",
  },
  logo: null,
  primary: false,
  class: "text-[2.5rem leading-[3rem]",
};

export const theLastOfUss = {
  image: theLast,
  logo: theLastLogo,
  contents: {
    primary: false,
    title: "Available Now",
    content: "Relive the beloved game that started it all - rebuilt for PS5.",
  },
};
