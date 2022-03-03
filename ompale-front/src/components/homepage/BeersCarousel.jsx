// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper';

// Import Swiper styles
import "swiper/css";

export default function BeersCarousel() {


    return ( 
    <section className="beer-carousel-frame">
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
<SwiperSlide><img className="single-beer-img"src="https://produits.bienmanger.com/37094-0w470h470_Brewdog_Punk_Ipa_Biere_Ecossaise.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img className="single-beer-img"src="https://produits.bienmanger.com/37094-0w470h470_Brewdog_Punk_Ipa_Biere_Ecossaise.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img className="single-beer-img"src="https://produits.bienmanger.com/37094-0w470h470_Brewdog_Punk_Ipa_Biere_Ecossaise.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img className="single-beer-img"src="https://produits.bienmanger.com/37094-0w470h470_Brewdog_Punk_Ipa_Biere_Ecossaise.jpg" alt="" /></SwiperSlide>
<SwiperSlide><img className="single-beer-img"src="https://produits.bienmanger.com/37094-0w470h470_Brewdog_Punk_Ipa_Biere_Ecossaise.jpg" alt="" /></SwiperSlide>

        ...
      </Swiper>
    </section> 
    );
}

