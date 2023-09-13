import { Link } from "react-router-dom";
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

const FeaturedBooks = () => {
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
    <div className="section">
      <div className="flex justify-between items-center">
        <Heading title={"Featured Books"}></Heading>
      </div>
      {/* <Skeleton count={3} className="my-2 h-10" />  */}
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-10 place-items-center items-start my-5 py-5">
      {
                books?.slice(4,10).map(book => <ProductCard key={book._id} data={book} loading={loading} ></ProductCard>)
            }
       
      
      </div> */}

      {/* <Swiper {...params}>
        {
          books?.slice(5,12).map(book =>
            <ProductCard key={book._id} data={book} loading={loading}></ProductCard>
            )
        }
      </Swiper> */}

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
    </div>
  );
};

export default FeaturedBooks;
