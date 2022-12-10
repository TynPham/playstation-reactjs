import React from "react";

const LisrHardware = ({ indexActive, setIndexActive, listHardware }) => {
  return (
    <div className="grid grid-cols-7 px-6 gap-4">
      {listHardware.map((hardware, index) => (
        <div
          onClick={() => setIndexActive(index)}
          key={index}
          className={`group flex items-center justify-center relative w-[200px] h-[170px] rounded-[1rem] transition-all ${
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
                className="max-w-[130px] mb-6"
              />
            </div>
            <span className={`text-[17px] max-w-[95%] absolute top-[70%]`}>
              {hardware.smallTitle ? hardware.smallTitle : hardware.title}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default LisrHardware;
