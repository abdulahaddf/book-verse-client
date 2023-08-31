import { Link } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import Heading from "../heading/Heading";
import UseBooks from "../../../hooks/UseBooks";



const FeaturedBooks = () => {
  const {books} = UseBooks();


 


  return (
    <div className="section">
      <div className="flex justify-between items-center">
        <Heading title={"Featured Books"}></Heading>
        <Link className="btn-primary ">See More</Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 content-center my-5">
      {
                books?.slice(0,4).map(book => <BookCard key={book._id} book={book} ></BookCard>)
            }
       
     
      </div>
    </div>
  );
};

export default FeaturedBooks;
