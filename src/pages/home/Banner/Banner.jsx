import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import LazyLoad from "react-lazy-load";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";


const Banner = () => {
  const { data: banners = [], isLoading } = useQuery(["banners"], async () => {
    const res = await fetch("https://book-verse-team-project-server.up.railway.app/banners");
    return res.json();
  });
  console.log(banners);

  if (isLoading) {
    return (
      <div className="swiper skeleton h-36 md:h-full">
        <Skeleton height={550} />
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper z-0 "
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto play configuration
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
