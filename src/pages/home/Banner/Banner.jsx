import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import banner1 from "../../../assets/image/banners-01.jpg";
import banner2 from "../../../assets/image/banners-02.jpg";
import banner3 from "../../../assets/image/banners-03.jpg";
import LazyLoad from "react-lazy-load";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto play configuration
    >
<<<<<<< HEAD
      <LazyLoad>
        <SwiperSlide>
          {" "}
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
  );
=======
        <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
        
      </Swiper>
    );
>>>>>>> e54d453e350289ed2321e3992df656ee03f864d3
};

export default Banner;
