import Heading from "../heading/Heading";
import UseBooks from "../../../hooks/UseBooks";
import ProductCard from "../productCard/ProductCard";
import Skeleton from "react-loading-skeleton";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const FeaturedBooks = () => {
  const { darkMode} = useContext(AuthContext);
  const { books, loading } = UseBooks();
  // console.log(books);
  // const params = {
  //   slidesPerView: 3,
  //   spaceBetween: 30,
  //   slidesPerGroup: 3,
  //   loop: true,
  //   loopFillGroupWithBlank: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // };
  return (
    <div className={`${darkMode?"section bg-[#3C4043] ":"section"}`}>
      <div className="flex justify-between items-center">
        <Heading title={"Featured Books"}></Heading>
      </div>
      {
        loading ? <Skeleton count={3} className="my-4 h-28" /> :   <div className="py-5">
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
          {books?.slice(0, 20).map((book, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard
                key={book._id}
                data={book}
                loading={loading}
              ></ProductCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      }

      {/* ----------------------------------
              Slider added -foisal 
          ----------------------------*/}
     
    </div>
  );
};

export default FeaturedBooks;
