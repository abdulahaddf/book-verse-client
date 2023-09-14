import Heading from "../heading/Heading";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBestSelling } from "../../../pages/payment/redux/BestSellingSlice";
import ProductCard from "../productCard/ProductCard";
import { useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BestSelling = () => {
  const { darkMode } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://book-verse-server-phi.vercel.app/bestSelling")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setBestSelling({ bestSelling: data }));
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  const bestSellingData = useSelector((state) => state.bestSelling.bestSelling);

  // console.log(books,'tonu')
  return (
    <div className="section ">
      <div className="flex justify-between items-center">
        <Heading title={"Best Selling"}></Heading>
        <Link
          to="/allBestSelling"
          className={`${
            darkMode
              ? " btn-fifth-dark hover:text-white  hover:no-underline hover:font-[500] text-xs w-24 h-7 md:w-36 md:h-10 md:text-base" 
              : "btn-fifth hover:text-white hover:no-underline text-xs w-24 h-7 md:w-36 md:h-10 md:text-base "
          }`}
        >
          See All
        </Link>
      </div>
      {/* <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-10 items-start  py-5 place-items-center">
        {bestSellingData?.slice(0, 10).map((book) => (
          <ProductCard key={book._id} data={book} text='bestSelling' loading={loading}></ProductCard>
        ))}
      </div> */}

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
          {bestSellingData?.slice(0, 20).map((book, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard
                key={book._id}
                data={book}
                text="bestSelling"
                loading={loading}
              ></ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSelling;
