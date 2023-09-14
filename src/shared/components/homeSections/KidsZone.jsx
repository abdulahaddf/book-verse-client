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
import { AuthContext } from '../../../provider/AuthProvider';
import { useContext } from 'react';

const KidsZone = () => {
    const { books, loading } = UseBooks();

    // Tonmoy start

    const { darkMode } = useContext(AuthContext);

    // Tonmoy End
  
    console.log(books)
    return (
      <div className="section">
        <div className="flex justify-between items-center">
                <Heading title={"Kids Zone"}></Heading>
                <Link to='/allkidsbooks' className={darkMode?"btn-fifth-dark hover:text-white hover:no-underline":"btn-fifth hover:text-white hover:no-underline"}>See More</Link>
         
        </div>
        {/* <Skeleton count={3} className="my-2 h-10" />  */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 place-items-center items-start my-5 py-5">
        {
                    books?.map((book) => {
                        if ((book.category.toLowerCase()) === 'kids') {
                          return <ProductCard key={book._id} data={book} loading={loading} ></ProductCard>
                      }
                  } )
              }
       
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
          {
                    books?.map((book,idx) => {
                        if ((book.category.toLowerCase()) === 'kids') {
                          return <SwiperSlide key={idx}><ProductCard key={book._id} data={book} loading={loading} ></ProductCard></SwiperSlide>
                      }
                  } )
        }
        </Swiper>
        
      </div>
    </div>
  );
};

export default KidsZone;
