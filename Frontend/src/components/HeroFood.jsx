import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/scss';
import { Autoplay } from 'swiper/modules';



function HeroFood() {
    return ( 
        <section className="HeroFoodsContainer">
             <Swiper
        slidesPerView={1.3}
        centeredSlides={true}
        spaceBetween={10}
        autoplay={{delay: 2500,
            disableOnInteraction: false,}}
        modules={[Autoplay]}
        initialSlide={1}
        className="mySwiper"
      >
                <SwiperSlide>
                    <img src="  /assets/img/sushi-hero-3.svg" alt="food" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="  /assets/img/image1.svg" alt="food" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="  /assets/img/sushi-hero.svg" alt="food" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="  /assets/img/sushi-hero-2.svg" alt="food" />
                </SwiperSlide>
            </Swiper>
        </section>
     );
}

export default HeroFood;
