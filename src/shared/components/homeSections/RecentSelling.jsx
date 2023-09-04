import { useEffect} from "react";
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import { useDispatch, useSelector } from 'react-redux';
import { setRecentSelling } from "../../../pages/payment/redux/RecentSellingSlice";
import ProductCard from "../productCard/ProductCard";
import { useState } from "react";


const RecentSelling = () => {
    

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

  
    // console.log(books,'tonu')
    return (
      <div className="section">
        <div className="flex justify-between items-center">
          <Heading title={"Recent Selling"}></Heading>
          <Link to='/allRecentSelling' className="btn-primary ">See More</Link>
        </div>
        <div className="grid md:grid-cols-3 xl:grid-cols-5 gap-10 place-items-center items-start py-5">
          {recentSellingData?.slice(0, 10).map((book) => (
            <ProductCard key={book._id} data={book} text='recentSelling' loading={loading}></ProductCard>
          ))}
        </div>
      </div>
    );
};

export default RecentSelling;