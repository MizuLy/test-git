import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Slidebar() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true} //loop for autoplay to work
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/Samurai.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sakura.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/shrine.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/naturol.jpg" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/moonlit.jpg" alt="Slide 5" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
