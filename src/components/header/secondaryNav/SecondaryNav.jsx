import React from "react";
import ps5Logo from "../../../assets/image/ps5.png";
import ps4Logo from "../../../assets/image/ps4.png";
import vr from "../../../assets/image/ps-vr.png";

const SecondaryNav = () => {
  return (
    <div className="subNav max-h-[220px] w-full bg-white absolute left-0 top-[0px] z-[-1] transition-all duration-500 opacity-0 invisible">
      <div className="flex items-center justify-center gap-6 mt-2 pb-5">
        <a
          href="https://www.playstation.com/en-vn/ps5/games/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-games%3Aps5"
          className="flex flex-col items-center p-[15px_30px] hover:shadow-shadowBox"
          target="_blank"
          rel="noreferrer"
        >
          <img className="scale-[0.8]" src={ps5Logo} alt="ps5" />
          <span className="mt-[-0.5rem] text-black font-semibold text-[17px]">
            PS5
          </span>
        </a>
        <a
          href="https://www.playstation.com/en-vn/ps5/games/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-games%3Aps5"
          className="flex flex-col items-center p-[15px_30px] hover:shadow-shadowBox"
          target="_blank"
          rel="noreferrer"
        >
          <img className="scale-[0.8]" src={ps4Logo} alt="ps4" />
          <span className="mt-[-0.5rem] text-black font-semibold text-[17px]">
            PS4
          </span>
        </a>
        <a
          href="https://www.playstation.com/en-vn/ps5/games/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-games%3Aps5"
          className="flex flex-col items-center p-[15px_30px] hover:shadow-shadowBox"
          target="_blank"
          rel="noreferrer"
        >
          <img className="scale-[0.8]" src={vr} alt="ps-vr" />
          <span className="mt-[-0.5rem] text-black font-semibold text-[17px]">
            PS-VR
          </span>
        </a>
      </div>
      <div className="flex items-center justify-center mt-5 gap-8">
        <a
          href="https://www.playstation.com/en-vn/editorial/this-month-on-playstation/great-ps4-games-upgraded-for-ps5/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-games%3Aps4-games-on-ps5"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <div className="bg-[#0070d1] w-2 h-2 rounded-full mr-2"></div>
          <span className="relative text-black font-semibold text-[17px] hover:text-[#0070d1]">
            PS4 games on PS5
          </span>
        </a>
        <a
          href="
          https://www.playstation.com/en-vn/games/pc-games/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-games%3Aplaystation-games-on-pc
        "
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <div className="bg-[#0070d1] w-2 h-2 rounded-full mr-2"></div>
          <span className="text-black font-semibold text-[17px] hover:text-[#0070d1]">
            PlayStation games on PC
          </span>
        </a>
      </div>
    </div>
  );
};

export default SecondaryNav;
