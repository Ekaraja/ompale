import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Zoom, Autoplay, Pagination, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "../../style/homepage.css";

import "../../style/carousel.css";

export default function Carousel() {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        className="swipper-frame"
        slidesPerView={3.3}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        speed={1500}
        loop={true}
        /*       freeMode={true} */
        height={300}
        spaceBetween={25}
        centeredSlides={true}
        mousewheel={true}
        modules={[Mousewheel, Zoom]} //Scrollable avec la molette
        zoom={true} // Zoomable en double-cliquant
      >
        <SwiperSlide>
          <div className="photo-border">
            <img
              src="https://u.cubeupload.com/Sono/photo2.jpeg"
              alt=""
              className="slide-image"
            />
            <div className="photo-legend">Massy Pal ! 12/04/21 </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="photo-border">
            <img
              src="https://u.cubeupload.com/Sono/photo1.jpeg"
              alt=""
              className="slide-image"
            />
            <div className="photo-legend">#Chaises de cantines</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="photo-border">
            <img
              src="https://u.cubeupload.com/Sono/photo7.jpeg"
              alt=""
              className="slide-image"
            />
            <div className="photo-legend">#bière artisanale</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="photo-border">
            <img
              src="https://u.cubeupload.com/Sono/photo3.jpeg"
              alt=""
              className="slide-image"
            />
            <div className="photo-legend">#bière artisanale</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="photo-border">
            <img
              src="https://u.cubeupload.com/Sono/photo9.jpeg"
              alt=""
              className="slide-image"
            />
            <div className="photo-legend">Terrasse printemps 2021 </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
