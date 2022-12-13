import React from "react";

const LisrHardware = ({ indexActive, setIndexActive, listHardware }) => {
  return (
    <div className="md:mt-10 grid grid-cols-7 md:px-20 px-6 gap-4">
      {listHardware.map((hardware, index) => (
        <div
          onClick={() => setIndexActive(index)}
          key={index}
          className={`group flex items-center justify-center relative overflow-hidden md:w-[unset] w-[200px] rounded-[1rem] transition-all ${
            index === indexActive ? "active" : ""
          }`}
        >
          <button
            className={`flex flex-col items-center opacity-80 group-hover:opacity-100 transition-all duration-300 ${
              index === indexActive ? "opacity-100" : ""
            }`}
          >
            <div>
              <img
                src={hardware.imageMin}
                alt="hardware"
                className="md:max-w-[65px] max-w-[130px] md:mb-[5.5rem] mb-6"
              />
            </div>
            <span
              className={`md:text-[15px] text-[17px] max-w-[95%] absolute md:top-[40%] top-[70%]`}
            >
              {hardware.smallTitle ? hardware.smallTitle : hardware.title}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default LisrHardware;
