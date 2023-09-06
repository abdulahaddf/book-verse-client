import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import banner1 from "../../../assets/image/banners-01.jpg";
import banner2 from "../../../assets/image/banners-02.jpg";
import banner3 from "../../../assets/image/banners-03.jpg";
import LazyLoad from "react-lazy-load";
import { useEffect, useState } from "react";
import Loader from "../../../shared/components/loader/Loader";
import { useQuery } from "@tanstack/react-query";

const Banner = () => {

  // const [banners, setBanners] = useState([]);
  // const [loading, setLoading] = useState(true);

  const { data: banners = [],isLoading } = useQuery(["banners"], async () => {
    const res = await fetch("http://localhost:5000/banners");
    return res.json();
  });
console.log(banners)



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

      {/* {banners.map(banner => {
<img src={banner.bannerURL} alt="" /> */}
{/* //         <SwiperSlide>
//   <img src={banner.bannerURL} alt="" />
// </SwiperSlide> */}

        
      {/* //   <LazyLoad key={banner._id}>
      //   <SwiperSlide>
      //     {" "}
      //     <img src={banner.bannerURL} alt="" />
      //   </SwiperSlide>
      // </LazyLoad> */}


 
      

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
  );
};

export default Banner;
