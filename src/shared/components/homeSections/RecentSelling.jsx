import { useEffect } from "react";
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";
// import BookCard from "../BookCard/BookCard";
import { useDispatch, useSelector } from "react-redux";
import { setRecentSelling } from "../../../pages/payment/redux/RecentSellingSlice";
import ProductCard from "../productCard/ProductCard";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const RecentSelling = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://book-verse-server-phi.vercel.app/recentSelling")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setRecentSelling({ recentSelling: data }));
        setLoading(false);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, [dispatch]);

  const recentSellingData = useSelector(
    (state) => state.recentSelling.recentSelling
  );

  console.log(recentSellingData, "tonu");
  return (
    <div className="section">
      <div className="flex justify-between items-center z-0">
        <Heading title={"Recent Selling"}></Heading>
        <Link
          to="/allRecentSelling"
          className="btn-fifth hover:text-white hover:no-underline text-xs w-24 h-7 md:w-36 md:h-10 md:text-base"
        >
          See All
        </Link>
      </div>
      {/* ----------------------------------
              Slider added -foisal 
          ----------------------------*/}
      <div className="py-5">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          initialSlide={1}
          breakpoints={{
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper flex w-full"
        >
          {recentSellingData?.slice(0, 20).map((book, idx) => (
            <SwiperSlide key={idx}>
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
      {/* normal grid view  */}
      {/* <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-10 place-items-center items-start py-5">
          {recentSellingData?.slice(0, 10).map((book) => (
            <ProductCard key={book._id} data={book} text='recentSelling' loading={loading}></ProductCard>
          ))}
        </div> */}
    </div>
  );
};

export default RecentSelling;
