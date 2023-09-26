import Heading from "../heading/Heading";

import ProductCard from "../productCard/ProductCard";
import UseBooks from "../../../hooks/UseBooks";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";

const KidsZone = () => {
  const { books, loading } = UseBooks();

  // Tonmoy start

  const { darkMode } = useContext(AuthContext);

  // Tonmoy End

  console.log(books);
  return (
    <div className={`${darkMode ? "section bg-gray " : "section"}`}>
      <div className="flex justify-between items-center">
        <Heading title={"Kids Zone"}></Heading>
        <Link
          to="/allkidsbooks"
          className={
            darkMode
            ? " btn-fifth-dark hover:text-white  hover:no-underline hover:font-[500]"
            : "btn-fifth hover:text-white hover:no-underline text-xs w-24 h-7 md:w-36 md:h-10 md:text-base"
          }
        >
          See More
        </Link>
      </div>
      
      <div className="py-5">
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
          className="mySwiper flex w-full"
        >
          {books?.map((book, idx) => {
            if (book.category.toLowerCase() === "kids") {
              return (
                <SwiperSlide key={idx}  className={darkMode?" bg-gray":""} >
                  <ProductCard
                    key={book._id}
                    data={book}
                    loading={loading}
                  ></ProductCard>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default KidsZone;
