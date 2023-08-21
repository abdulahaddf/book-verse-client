import { useEffect, useState } from "react";
import Heading from "../heading/Heading";
import { Link } from "react-router-dom";
import BookCard from "../BookCard/BookCard";


const RecentSelling = () => {
    const [books,setBooks]=useState([])

    useEffect(()=>{
  
  
        fetch('https://book-verse-server-phi.vercel.app/recentSelling')
        .then(res=> res.json())
        .then(res=> setBooks(res))
        .catch(error=> console.log(error))
  
  
    },[])
  
    console.log(books,'tonu')
    return (
      <div className="section">
        <div className="flex justify-between items-center">
          <Heading title={"Recent Selling"}></Heading>
          <Link className="btn-primary ">See More</Link>
        </div>
        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-10 content-center">
          {books?.slice(0, 8).map((book) => (
            <BookCard key={book._id} book={book} text='recentSelling'></BookCard>
          ))}
        </div>
      </div>
    );
};

export default RecentSelling;