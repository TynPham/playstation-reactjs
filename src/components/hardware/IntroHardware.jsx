import React from "react";

const IntroHardware = ({ listHardware, indexActive }) => {
  return (
    <div>
      {listHardware.map((hardware, index) => (
        <div
          key={index}
          className={`sm:grid-cols-1 sm:gap-0 grid-cols-1-2 sm:p-0-2r pl-24 pr-16 gap-24 hidden transition-all ${
            index === indexActive ? "griddis" : ""
          }`}
        >
          <div className="sm:order-last sm:text-center flex flex-col justify-center">
            <div className="text-black mt-6 ml-2">
              <h3 className="sm:text-1.75r text-4xl font-light">
                {hardware.title}
              </h3>
              <p className="hiddenText text-1.3r opacity-70 mt-5 max-w-500">
                {hardware.content}
              </p>
            </div>
            <button className="sm:m-auto sm:mt-4 p-2p rounded-2 mt-5 text-left w-max hover:outline-[3px] hover:outline hover:outline-btn">
              <a
                href="https://www.facebook.com/"
                className=" rounded-2 py-2 px-4 bg-btn text-white font-semibold text-lg flex items-center"
              >
                Learn more
              </a>
            </button>
          </div>
          <div className="sm:ml-0 flex items-center ml-2r mt-3r opcityKf">
            <img className="max-h-550" src={hardware.image} alt="hardware" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default IntroHardware;
