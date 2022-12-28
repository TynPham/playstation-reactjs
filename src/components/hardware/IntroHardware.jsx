import React from "react";

const IntroHardware = ({ listHardware, indexActive }) => {
  return (
    <div>
      {listHardware.map((hardware, index) => (
        <div
          key={index}
          className={`grid grid-cols-[1fr_2fr] sm:grid-cols-1 sm:p-[0_2rem] pl-24 pr-16 sm:gap-0 gap-[6rem] hidden transition-all ${
            index === indexActive ? "griddis" : ""
          }`}
        >
          <div className="flex flex-col justify-center sm:order-last sm:text-center">
            <div className="text-black mt-6 ml-2">
              <h3 className="sm:text-[1.75rem] text-4xl font-light">
                {hardware.title}
              </h3>
              <p className="hiddenText text-[1.3rem] opacity-70 mt-5 max-w-[500px]">
                {hardware.content}
              </p>
            </div>
            <button className="p-[2px] rounded-[2rem] mt-5 hover:outline-[3px] hover:outline hover:outline-[#0070cc] text-left w-[max-content] sm:m-auto sm:mt-4">
              <a
                href="https://www.facebook.com/"
                className=" rounded-[2rem] py-2 px-4 bg-[#0070cc] text-white font-semibold text-lg flex items-center"
              >
                Learn more
              </a>
            </button>
          </div>
          <div className="flex items-center sm:ml-0 ml-[2rem] mt-[3rem] opcityKf">
            <img
              className="max-h-[550px]"
              src={hardware.image}
              alt="hardware"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default IntroHardware;
