import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import LazyLoad from "react-lazy-load";

import Loader from "../../../shared/components/loader/Loader";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";

const Banner = () => {

  const { data: banners = [], isLoading } = useQuery(["banners"], async () => {
    const res = await fetch("https://book-verse-server-phi.vercel.app/banners");
    return res.json();
  });
  console.log(banners);

  if (isLoading) {
    return <div className="swiper skeleton">
    <Skeleton height={550} />
  </div>;
  }
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper z-0"
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto play configuration
    >
      {banners.map((banner) => (
        <LazyLoad key={banner._id}>
          <SwiperSlide>
            <img className="w-full" src={banner.bannerURL} alt="" />
          </SwiperSlide>
        </LazyLoad>
      ))}
    </Swiper>
  );
};

export default Banner;
