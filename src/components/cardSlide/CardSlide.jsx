import React from "react";
import Title from "../explorePs4/Title";
import { cardSlide } from "../../data/listData";
import CardSl from "./CardSl";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardSlide = () => {
  return (
    <div>
      <Title data={cardSlide.titles} />
      <Swiper
        className="mt-16 px3-6 pb4"
        modules={[Navigation, Pagination]}
        // spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide className="flex justify-center">
          <CardSl />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSl />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSl />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSl />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSl />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSl />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSl />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSl />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSl />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSl />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSlide;
