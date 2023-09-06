import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import banner1 from "../../../assets/image/banners-01.jpg";
import banner2 from "../../../assets/image/banners-02.jpg";
import banner3 from "../../../assets/image/banners-03.jpg";
import LazyLoad from "react-lazy-load";
import Skeleton from "react-loading-skeleton";

const Banner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //TODO : add fetching banner from DB and set loading status
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="banner-container">
      {loading ? (
        <div className="swiper skeleton">
          <Skeleton height={550} />
        </div>
      ) : (
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <LazyLoad>
            <SwiperSlide>
              <img src={banner1} alt="" />
            </SwiperSlide>
          </LazyLoad>
          <LazyLoad>
            <SwiperSlide>
              <img src={banner2} alt="" />
            </SwiperSlide>
          </LazyLoad>
          <LazyLoad>
            <SwiperSlide>
              <img src={banner3} alt="" />
            </SwiperSlide>
          </LazyLoad>
        </Swiper>
      )}
    </div>
  );
};

export default Banner;
