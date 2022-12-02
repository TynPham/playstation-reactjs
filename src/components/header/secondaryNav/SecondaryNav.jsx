import React from "react";
// import ps5Logo from "../../../assets/image/ps5.png";
// import ps4Logo from "../../../assets/image/ps4.png";
// import vr from "../../../assets/image/ps-vr.png";

const SecondaryNav = ({ item1, item2 }) => {
  return (
    <div className="subNav max-h-[220px] w-full bg-white absolute left-0 top-[0px] z-[-1] transition-all duration-500 opacity-0 invisible">
      {item1 ? (
        <div className="flex items-center justify-center gap-6 mt-1 mb-4">
          {item1.map((item) => (
            <a
              href="https://www.playstation.com/en-vn/ps5/games/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-games%3Aps5"
              className="flex flex-col items-center p-[15px_30px] hover:shadow-shadowBox"
              target="_blank"
              rel="noreferrer"
            >
              <img className="scale-[0.8]" src={item.logo} alt={item.name} />
              <span className="mt-[-0.5rem] text-black font-semibold text-[17px]">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      ) : (
        ""
      )}
      {item2 ? (
        <div className="flex items-center justify-center py-4 mt-3 gap-8 border-t border-solid border-[#ccc]">
          {item2.map((item) => (
            <a
              href="https://www.playstation.com/en-vn/editorial/this-month-on-playstation/great-ps4-games-upgraded-for-ps5/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-games%3Aps4-games-on-ps5"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <div className="bg-[#0070d1] w-2 h-2 rounded-full mr-2"></div>
              <span className="relative text-black font-semibold text-[17px] hover:text-[#0070d1]">
                {item}
              </span>
            </a>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SecondaryNav;
