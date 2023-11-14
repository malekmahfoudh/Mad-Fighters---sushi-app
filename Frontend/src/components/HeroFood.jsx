import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/scss';
import { Autoplay } from 'swiper/modules';



function HeroFood() {
    return ( 
        <main className="HeroFoodsContainer">
             <Swiper
        slidesPerView={1.3}
        centeredSlides={true}
        spaceBetween={10}
        autoplay={{delay: 2500,
            disableOnInteraction: false,}}
        modules={[Autoplay]}

        className="mySwiper"
      >
                <SwiperSlide>
                    <img src="./public/assets/img/image1.svg" alt="food" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./public/assets/img/image1.svg" alt="food" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./public/assets/img/image1.svg" alt="food" />
                </SwiperSlide>
            </Swiper>
        </main>
     );
}

export default HeroFood;