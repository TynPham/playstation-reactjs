import React from "react";

const Hardware = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr] pl-24 pr-16 gap-[6rem]">
      <div className="flex flex-col justify-center">
        <div className="text-black mt-6 ml-2">
          <h3 className="text-4xl font-light">PlayStation 5 Console</h3>
          <p className="text-[1.3rem] opacity-70 mt-5 max-w-[700px]">
            Experience an all-new generation of incredible PlayStation games.
          </p>
        </div>
        <button className="p-[3px] rounded-[2rem] mt-5 hover:outline-[3px] hover:outline hover:outline-[#0070cc] text-left w-[max-content] ">
          <a
            href="https://www.facebook.com/"
            className=" rounded-[2rem] py-2 px-4 bg-[#0070cc] text-white font-semibold text-lg flex items-center"
          >
            Learn more
          </a>
        </button>
      </div>
      <div className="flex items-center max-w-[680px] ml-[2rem] mt-[3rem]">
        <img
          className="w-full"
          src="https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-horizontal-product-shot-01-ps5-en-23nov20?$800px--t$"
          alt="hardware"
        />
      </div>
    </div>
  );
};

export default Hardware;
