import { useEffect} from "react";
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import { useDispatch, useSelector } from 'react-redux';
import { setRecentSelling } from "../../../pages/payment/redux/RecentSellingSlice";


const RecentSelling = () => {
    

    const dispatch = useDispatch();

    useEffect(() => {
      fetch('https://book-verse-server-phi.vercel.app/recentSelling')
        .then(res => res.json())
        .then(data => {
          dispatch(setRecentSelling({ recentSelling: data }));
        })
        .catch(error => console.log(error));
    }, [dispatch]);
  
    const recentSellingData = useSelector(state => state.recentSelling.recentSelling);

  
    // console.log(books,'tonu')
    return (
      <div className="section">
        <div className="flex justify-between items-center">
          <Heading title={"Recent Selling"}></Heading>
          <Link to='/allRecentSelling' className="btn-primary ">See More</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 content-center my-5">
          {recentSellingData?.slice(0, 8).map((book) => (
            <BookCard key={book._id} book={book} text='recentSelling'></BookCard>
          ))}
        </div>
      </div>
    );
};

export default RecentSelling;