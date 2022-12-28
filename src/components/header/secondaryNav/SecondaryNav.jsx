import React from "react";

const SecondaryNav = ({ item1, item2 }) => {
  return (
    <>
      {item1 ? (
        <div className="flex items-center flex-wrap sm:justify-between justify-center gap-6 mt-1 mb-4 sm:w-[95%] sm:px-4">
          {item1.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex flex-col items-center sm:p-0 p-[15px_30px] hover:shadow-shadowBox"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="sm:scale-[0.6] scale-[0.8]"
                src={item.logo}
                alt={item.name}
              />
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
        <div className="flex sm:flex-col sm:items-start items-center justify-center sm:pl-4 py-4 mt-3 sm:gap-2 gap-8 border-t border-solid border-[#ccc]">
          {item2.map((item, index) => (
            <a
              key={index}
              href="https://www.playstation.com/en-vn/editorial/this-month-on-playstation/great-ps4-games-upgraded-for-ps5/?smcid=pdc%3Aen-vn%3Aprimary%20nav%3Amsg-games%3Aps4-games-on-ps5"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <div className="bg-[#0070d1] w-2 h-2 rounded-full mr-2"></div>
              <span className="relative text-black md:font-normal font-semibold md:text-[11px] text-[17px] hover:text-[#0070d1]">
                {item}
              </span>
            </a>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SecondaryNav;
