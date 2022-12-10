import React from "react";
import Title from "../explorePs4/Title";
import { cardSlideData } from "../../data/cardSlideData";
import CardSl from "./CardSl";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardSlide = () => {
  return (
    <div>
      <Title data={cardSlideData.titles} />
      <Swiper
        className="mt-16 px3-6 pb4"
        modules={[Navigation, Pagination]}
        // spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {cardSlideData.data.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <CardSl card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlide;
