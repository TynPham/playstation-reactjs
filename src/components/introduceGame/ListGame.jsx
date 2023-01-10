import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import { useRef } from "react";

const ListGame = ({
  handleClickChangeImg,
  newGame,
  handleSlideNext,
  handleSlidePrev,
  currIndex,
  setcurrIndex,
  width,
}) => {
  const swiperRef = useRef(null);
  const btnPrevRef = useRef(null);
  const btnNextRef = useRef(null);

  useEffect(() => {
    if (width <= 738) {
      return;
    }
    const autoTime = setTimeout(() => {
      if (currIndex === newGame.length - 1) {
        setcurrIndex(0);
      } else {
        setcurrIndex(currIndex + 1);
      }
    }, 5000);

    return () => {
      clearTimeout(autoTime);
    };
  }, [currIndex, newGame.length, setcurrIndex, width]);

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
      allowTouchMove={false}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      className="sm:block swiperSm mt-4"
      loop={true}
      breakpoints={{
        200: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        738: {
          slidesPerView: 7,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      }}
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
        <SwiperSlide key={index} className="flex items-center">
          <span
            onClick={() => handleClickChangeImg(index)}
            className={`${
              index === currIndex ? "active" : ""
            } rounded-2xl transition-all flex items-end justify-center p-2p group hover:shadow-gameSd hover:-translate-y-3`}
          >
            <button
              className={`rounded-2xl overflow-hidden w-full ${
                index === currIndex ? "opacity-100" : ""
              }`}
            >
              <img src={game.imgMin} alt="min" />
            </button>
          </span>
        </SwiperSlide>
      ))}
      <button
        ref={btnPrevRef}
        onClick={handleClickPrev}
        className="sm:block hidden btn-prev absolute top-1/2 left-15% z-10"
      >
        <MdOutlineNavigateBefore className="inline text-3xl" />
      </button>
      <button
        ref={btnNextRef}
        onClick={handleClickNext}
        className="sm:block hidden btn-next absolute top-1/2 right-15% z-10"
      >
        <MdOutlineNavigateNext className="inline text-3xl" />
      </button>
    </Swiper>
  );
};

export default ListGame;
