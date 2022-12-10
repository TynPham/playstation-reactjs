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

import ps5Console from "../assets/image/ps5-console.png";
import ps5ConsoleCover from "../assets/image/ps5-console-cover.jpg";
import ps5ConsoleCoverMin from "../assets/image/ps5-console-cover-min.jpg";
import pulse3D from "../assets/image/3d-pulse.jpg";
import pulse3DMin from "../assets/image/3d-pulse-min.jpg";
import dualSenseEdge from "../assets/image/DualSense-Edge.jpg";
import dualSenseEdgeMin from "../assets/image/DualSense-Edge-min.jpg";
import dualSense from "../assets/image/dualsense.jpg";
import dualSenseMin from "../assets/image/dualsense-min.jpg";
import cameraHD from "../assets/image/hd-camera.jpg";
import remote from "../assets/image/media-remote.jpg";
import remoteMin from "../assets/image/media-remote-min.jpg";

import card1 from "../assets/image/card-1.jpg";
import card2 from "../assets/image/card-2.jpg";
import card3 from "../assets/image/card-3.png";

import ps4Slim from "../assets/image/ps4-slim.jpg";
import double11 from "../assets/image/double11.jpg";
import dualshock4 from "../assets/image/dualshock-4.jpg";

import twitter from "../assets/image/twitter.jpg";
import facebook from "../assets/image/facebook.jpg";
import instagram from "../assets/image/instagram.jpg";
import youtube from "../assets/image/youtube.png";

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

export const listHardware = [
  {
    smallTitle: "PS5 Console",
    title: "PlayStation 5 Console",
    content:
      "Experience an all-new generation of incredible PlayStation games.",
    image: ps5Console,
    imageMin: ps5Console,
  },
  {
    title: "DualSense Wireless Controller",
    content:
      "Immerse yourself in the gaming experience with a controller the supports responsive haptic feedback and dynamic trigger effects.",
    image: dualSense,
    imageMin: dualSenseMin,
  },
  {
    title: "PULSE 3D Wireless Headset",
    content:
      "Enjoy a seamless wireless experience with a headset fine-tuned for 3D Audio on PS5 consoles.",
    image: pulse3D,
    imageMin: pulse3DMin,
  },
  {
    title: "DualSense Edge Wireless Controller",
    content:
      "Get an edge in gameplay with remappable buttons, tunable triggers and sticks, changeable stick caps, back buttons, and more.",
    image: dualSenseEdge,
    imageMin: dualSenseEdgeMin,
  },
  {
    title: "Media remote",
    content:
      "Conveniently control movies, streaming services and more on your PS5 console with an intuitive layout.",
    image: remote,
    imageMin: remoteMin,
  },
  {
    title: "HD Camera",
    content:
      "Add yourself to your gameplay videos and broadcasts with smooth, sharp, full-HD capture.",
    image: cameraHD,
    imageMin: cameraHD,
  },
  {
    title: "PS5 Console Covers",
    content:
      "Personalise your PlayStation 5 or PlayStation 5 Digital Edition console with a vibrant array of new colour options.",
    image: ps5ConsoleCover,
    imageMin: ps5ConsoleCoverMin,
  },
];

export const listCard = [
  {
    image: card1,
    content: "The best battle royale games on PS4 and PS5",
  },
  {
    image: card2,
    content: "The best strategy games on PS4 and PS5",
  },
  {
    image: card3,
    content: "The Playstation guide to creative gaming",
  },
];

export const exporePs4 = {
  titles: {
    title: "Explore PlayStation®4",
    content:
      "Incredible games, non-stop entertainment. There's never been a better time to enjoy PS4.",
  },
  data: [
    {
      image: ps4Slim,
      contents: {
        title: "PlayStation 4",
        content: "Incredible games live on PS4, with 1TB storage.",
      },
    },
    {
      image: double11,
      contents: {
        title: "PlayStation VR",
        content: "Over 500 games and experiences and counting. See them all.",
      },
    },
    {
      image: dualshock4,
      contents: {
        title: "Accessories",
        content:
          "Enhance your PS4 experience with a range of official accessories.",
      },
    },
  ],
};

export const socialMedia = [
  {
    image: twitter,
  },
  {
    image: facebook,
  },
  {
    image: instagram,
  },
  {
    image: youtube,
  },
];

export const footerData = [
  [
    "Support",
    "Privacy Policy",
    "Website terms of use",
    "PlayStation Studios",
    "Legal Documents & Notices",
    "About SIE",
    "PlayStation and the",
    "Environment",
  ],
  [
    "Health warning",
    "Age ratings",
    "PlayStation careers",
    "Intellectual property notices",
    "Publisher&Developer",
    "Relations",
    "Site map",
  ],
  ["Facebook", "Youtube", "Instagram", "Twitter"],
];
