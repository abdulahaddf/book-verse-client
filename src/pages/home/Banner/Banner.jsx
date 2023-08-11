import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// import 'swiper/swiper-bundle.min.css';
import banner1 from '../../../assets/image/banners-01.jpg'
import banner2 from '../../../assets/image/banners-02.jpg'
import banner3 from '../../../assets/image/banners-03.jpg'


const Banner = () => {
    return (
        <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto play configuration
    >
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
        
      </Swiper>
    );
};

export default Banner;