import ps5Logo from "../assets/image/ps5.png";
import ps4Logo from "../assets/image/ps4.png";
import psVrLogo from "../assets/image/ps-vr.png";
import ps4ProLogo from "../assets/image/ps4-pro.png";
import psVr2Logo from "../assets/image/ps-vr2.png";
import monthLogo from "../assets/image/month.png";
import supportLogo from "../assets/image/support.png";

import fifaImg from "../assets/image/fifa.jpg";
import fifaImgMin from "../assets/image/fifa-min.jpg";
import fifaImgLogo from "../assets/image/fifa-logo.png";
import game1Img from "../assets/image/game1.jpg";
import game1ImgMin from "../assets/image/game1_2.jpg";
import game1ImgLogo from "../assets/image/game1-logo.png";
import racingImg from "../assets/image/racing.jpg";
import racingImgMin from "../assets/image/racing-min.jpg";
import racingImgLogo from "../assets/image/racing-logo.png";
import godImg from "../assets/image/god.jpg";
import godImgMin from "../assets/image/god-min.jpg";
import godImgLogo from "../assets/image/god-logo.png";
import psvr2Img from "../assets/image/psvr2.jpg";
import psvr2ImgMin from "../assets/image/psvr2-min.jpg";
import psvr2ImgLogo from "../assets/image/psvr2-logo.png";
import christmasImg from "../assets/image/playstation-christmas.jpg";
import christmasImgMin from "../assets/image/playstation-christmas-min.jpg";

export const navArray = [
  {
    title: "Game",
    item: {
      item1: [
        {
          logo: ps5Logo,
          name: "PS5",
          link: "https://www.playstation.com/en-vn/ps5/games/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-games%3Aps5",
        },
        {
          logo: ps4Logo,
          name: "PS4",
          link: "https://www.playstation.com/en-vn/ps4/ps4-games/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-games%3Aps4",
        },
        {
          logo: psVrLogo,
          name: "PS VR",
          link: "https://www.playstation.com/en-vn/ps-vr/ps-vr-games/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-games%3Aps-vr",
        },
      ],
      item2: ["PS4 games on PS5", "PlayStation games on PC"],
    },
  },
  {
    title: "Hardware",
    item: {
      item1: [
        {
          logo: ps5Logo,
          name: "PS5",
          link: "https://www.playstation.com/en-vn/ps5/games/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-games%3Aps5",
        },
        {
          logo: ps4Logo,
          name: "PS4",
          link: "https://www.playstation.com/en-vn/ps4/ps4-games/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-games%3Aps4",
        },
        {
          logo: ps4ProLogo,
          name: "PS4 Pro",
          link: "https://www.playstation.com/en-vn/ps4/ps4-pro/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-hardware%3Aps4-pro",
        },
        {
          logo: psVr2Logo,
          name: "PS VR2",
          link: "https://www.playstation.com/en-vn/ps-vr2/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-hardware%3Aps-vr2",
        },
      ],
      item2: [
        "ualSense wireless controller",
        "ualSense wireless controller",
        "DUALSHOCK 4 wireless controller",
        "PS5 & PS4 accessories ",
        "PlayStation VR",
      ],
    },
  },
  {
    title: "News",
    item: {
      item1: [
        {
          logo: monthLogo,
          name: "This Month on PlayStation",
          link: "",
        },
      ],
      item2: ["Facebook", "YouTube", "Instagram", "Twitter", "Accessibility"],
    },
  },
  {
    title: "Shop",
    item: {
      item1: false,
      item2: ["Retail Store"],
    },
  },
  {
    title: "Support",
    item: {
      item1: [
        {
          logo: supportLogo,
          name: "Support",
          link: "",
        },
      ],
      item2: false,
    },
  },
];

export const newGame = [
  {
    image: christmasImg,
    imgMin: christmasImgMin,
    logo: "",
    contents: {
      primary: true,
      title: "The PlayStation® Holiday Gift Guide",
      content:
        "Discover the best gift ideas for gamers on PS4 & PS5, from incredible games and accessories.",
    },
  },
  {
    image: fifaImg,
    imgMin: fifaImgMin,
    logo: fifaImgLogo,
    contents: {
      title: "Feel it on the biggest stage",
      content:
        "Experience the ultimate connection to the biggest tournament in world football with FIFA 23 and PS5.",
    },
  },
  {
    image: game1Img,
    imgMin: game1ImgMin,
    logo: game1ImgLogo,
    contents: {
      title: "Welcome to Black Iron",
      content:
        "Survive the horrors stalking Black Iron Prison and discover the secrets that lie beneath in this new story-driven survival horror, out now on PS5",
    },
  },
  {
    image: racingImg,
    imgMin: racingImgMin,
    logo: racingImgLogo,
    contents: {
      title: "Run these streets",
      content:
        "The wait is over. Take over the city and stunt on the finest street racers in Lakeshore in Need for Speed™ Unbound, available now on PS5",
    },
  },
  {
    image: godImg,
    imgMin: godImgMin,
    logo: godImgLogo,
    contents: {
      title: "The Norse saga continues",
      content:
        "Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go, available now on PS4 & PS5",
    },
  },
  {
    image: psvr2Img,
    imgMin: psvr2ImgMin,
    logo: psvr2ImgLogo,
    contents: {
      title: "Feel A New Real™",
      content:
        "Escape into worlds that feel truly real as virtual reality gaming takes a huge generational leap forward. Coming 22nd February 2023.",
    },
  },
];
