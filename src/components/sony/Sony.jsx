import React from "react";
import logo from "../../assets/image/Sony.png";

const Sony = () => {
  return (
    <div className="relative z-10 h-9 bg-black w-full flex items-center justify-end">
      <a
        href="https://www.sony.com/en/"
        className="ml-auto"
        target="_blank"
        rel="noreferrer"
      >
        <div className="w-75 h-9 ml-2 mr-2">
          <img className="w-full h-full object-contain" src={logo} alt="sony" />
        </div>
      </a>
    </div>
  );
};

export default Sony;
