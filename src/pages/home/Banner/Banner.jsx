
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import LazyLoad from "react-lazy-load";

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
   <div className="overflow-hidden">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
    

        {banners.map((banner) => (
        <LazyLoad key={banner._id}>
          <SwiperSlide>
            <img className="w-[100vw]" src={banner.bannerURL} alt="" />
          </SwiperSlide>
        </LazyLoad>
      ))}
       
      </Swiper>
      
      
      
      
     
   </div>
  );
};

export default Banner;