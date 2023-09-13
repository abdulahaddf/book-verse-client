import { useContext, useEffect } from "react";
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";
// import BookCard from "../BookCard/BookCard";
import { useDispatch, useSelector } from "react-redux";
import { setRecentSelling } from "../../../pages/payment/redux/RecentSellingSlice";
import ProductCard from "../productCard/ProductCard";
import { useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const RecentSelling = () => {
  const { darkMode} = useContext(AuthContext);

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch('https://book-verse-server-phi.vercel.app/recentSelling')
        .then(res => res.json())
        .then(data => {
          dispatch(setRecentSelling({ recentSelling: data }));
          setLoading(false);
        })
        .catch(error => console.log(error));
        setLoading(false);
    }, [dispatch]);
  
    const recentSellingData = useSelector(state => state.recentSelling.recentSelling);

  
    console.log(recentSellingData,'tonu')
    return (
      <div className=" section">
        <div className="flex justify-between items-center">
          <Heading title={"Recent Selling"}></Heading>
          <Link to='/allRecentSelling' className={`${darkMode?" btn-fifth-dark hover:text-white  hover:no-underline ":"btn-fifth hover:text-white hover:no-underline"}`}>See More</Link>
        </div>
        <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-10 place-items-center items-start py-5">
          {recentSellingData?.slice(0, 10).map((book) => (
            <ProductCard key={book._id} data={book} text='recentSelling' loading={loading}></ProductCard>
          ))}
        </div> */}
    </div>
  );
};

export default RecentSelling;
