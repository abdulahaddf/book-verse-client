import Heading from "../heading/Heading";
import BookCard from "../BookCard/BookCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setBestSelling } from '../../../pages/payment/redux/BestSellingSlice';


const BestSelling = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://book-verse-server-phi.vercel.app/bestSelling')
      .then(res => res.json())
      .then(data => {
        dispatch(setBestSelling({ bestSelling: data }));
      })
      .catch(error => console.log(error));
  }, [dispatch]);

  const bestSellingData = useSelector(state => state.bestSelling.bestSelling);

  

  // console.log(books,'tonu')
  return (
    <div className="section ">
      <div className="flex justify-between items-center">
        <Heading title={"Best Selling"}></Heading>
        <Link to='/allBestSelling' className="btn-primary ">See More</Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 content-center my-5">
        {bestSellingData?.slice(0, 8).map((book) => (
          <BookCard key={book._id} book={book} text='bestSelling'></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
