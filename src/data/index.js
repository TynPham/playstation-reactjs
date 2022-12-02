import ps5Logo from "../assets/image/ps5.png";
import ps4Logo from "../assets/image/ps4.png";
import psVrLogo from "../assets/image/ps-vr.png";
import ps4ProLogo from "../assets/image/ps4-pro.png";
import psVr2Logo from "../assets/image/ps-vr2.png";
import monthLogo from "../assets/image/month.png";
import supportLogo from "../assets/image/support.png";

const navArray = [
  {
    title: "Game",
    item: {
      item1: [
        {
          logo: ps5Logo,
          name: "PS5",
        },
        {
          logo: ps4Logo,
          name: "PS4",
        },
        {
          logo: psVrLogo,
          name: "PS VR",
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
        },
        {
          logo: ps4Logo,
          name: "PS4",
        },
        {
          logo: ps4ProLogo,
          name: "PS4 Pro",
        },
        {
          logo: psVr2Logo,
          name: "PS VR2",
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
        },
      ],
      item2: false,
    },
  },
];

export default navArray;
