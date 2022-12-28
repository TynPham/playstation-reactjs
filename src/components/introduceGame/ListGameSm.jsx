import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { useRef } from "react";

const ListGameSm = ({
  handleClickChangeImg,
  newGame,
  handleSlideNext,
  handleSlidePrev,
}) => {
  const swiperRef = useRef(null);
  const btnPrevRef = useRef(null);
  const btnNextRef = useRef(null);

  const handleClickPrev = () => {
    swiperRef.current.slidePrev();
    handleSlidePrev();
  };

  const handleClickNext = () => {
    swiperRef.current.slideNext();
    console.log("e");
    handleSlideNext();
  };

  return (
    <Swiper
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      className="sm:block swiperSm hidden mt-8"
      spaceBetween={20}
      loop={true}
      slidesPerView={1}
      onSlideChangeTransitionStart={() => {
        btnPrevRef.current.classList.add("notClick");
        btnNextRef.current.classList.add("notClick");
      }}
      onSlideChangeTransitionEnd={() => {
        btnPrevRef.current.classList.remove("notClick");
        btnNextRef.current.classList.remove("notClick");
      }}
    >
      {newGame.map((game, index) => (
        <SwiperSlide key={index}>
          <span
            onClick={() => handleClickChangeImg(index)}
            className="hover:translate-y-[-0.75rem] rounded-[1rem] transition-all flex items-end justify-center group hover:shadow-gameSd p-[2px]"
          >
            <button className="rounded-[1rem] overflow-hidden w-full">
              <img src={game.imgMin} alt="min" />
            </button>
          </span>
        </SwiperSlide>
      ))}
      <button
        ref={btnPrevRef}
        onClick={handleClickPrev}
        className="btn-prev absolute top-1/2 left-[15%] z-10"
      >
        <MdOutlineNavigateBefore className="inline text-3xl" />
      </button>
      <button
        ref={btnNextRef}
        onClick={handleClickNext}
        className="btn-next absolute top-1/2 right-[15%] z-10"
      >
        <MdOutlineNavigateNext className="inline text-3xl" />
      </button>
    </Swiper>
  );
};

export default ListGameSm;
