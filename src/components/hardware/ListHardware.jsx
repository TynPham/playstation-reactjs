import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

const LisrHardware = ({ indexActive, setIndexActive, listHardware }) => {
  return (
    <Swiper
      className="sm:mt-8 md:mt-10 md:px-20 grid grid-cols-7 px-6 gap-4"
      modules={[Navigation]}
      onSlideNextTransitionStart={() => {
        if (indexActive === listHardware.length - 1) {
          return;
        }
        setIndexActive(indexActive + 1);
      }}
      onSlidePrevTransitionStart={() => {
        if (indexActive === 0) {
          return;
        }
        setIndexActive(indexActive - 1);
      }}
      breakpoints={{
        390: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: listHardware.length,
        },
        1023: {
          slidesPerView: listHardware.length,
        },
      }}
    >
      {listHardware.map((hardware, index) => (
        <SwiperSlide
          key={index}
          onClick={() => setIndexActive(index)}
          className={`md:w-unset group flex items-center justify-center relative overflow-hidden w-200 rounded-2xl transition-all ${
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
                className="md:max-w-65 max-w-130 md:mb-55r mb-6"
              />
            </div>
            <span
              className={`md:text-15p text-17p max-w-95% absolute md:top-40% top-70%`}
            >
              {hardware.smallTitle ? hardware.smallTitle : hardware.title}
            </span>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LisrHardware;
