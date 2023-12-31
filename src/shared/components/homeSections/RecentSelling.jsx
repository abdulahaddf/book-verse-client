import { useEffect } from "react";
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setRecentSelling } from "../../../pages/payment/redux/RecentSellingSlice";
import ProductCard from "../productCard/ProductCard";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper/modules";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";

const RecentSelling = () => {
  const { darkMode } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const [data,setData]=useState([])

  useEffect(() => {
    fetch("https://book-verse-team-project-server.up.railway.app/recentSelling")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        dispatch(setRecentSelling({ recentSelling: data }));
        setLoading(false);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, [dispatch]);


 
  return (
    <div className={`${darkMode ? "section bg-gray   " : "section"}`}>
      <div className="flex justify-between items-center z-0 ">
        <Heading title={"Recent Seller"}></Heading>
        <Link
          to="/allRecentSelling"
          className={
            darkMode
              ? " btn-fifth-dark hover:text-white  hover:no-underline hover:font-[500]"
              : "btn-fifth hover:text-white hover:no-underline text-xs w-24 h-7 md:w-36 md:h-10 md:text-base"
          }
        >
          See All
        </Link>
      </div>
      {/* ----------------------------------
              Slider added -foisal 
          ----------------------------*/}
      <div className="py-5   ">
        <Swiper
          slidesPerView={1}
          // centeredSlides={true}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          initialSlide={1}
          loop={true}
          breakpoints={{
            // when window width is >= 480px
            300: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 7,
            },
          }}
          className="mySwiper flex w-full z-0    "
        >
          {data?.slice(0, 20).map((book, idx) => (
            <SwiperSlide key={idx}  className={darkMode?" bg-gray":""} >
              <ProductCard
              
                key={book._id}
                data={book}
                text="recentSelling"
                loading={loading}
              ></ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
     
    </div>
  );
};

export default RecentSelling;