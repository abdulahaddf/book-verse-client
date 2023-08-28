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
      <div className="grid  md:grid-cols-3  xl:grid-cols-4 gap-8 content-center">
      {
                books?.slice(0,4).map(book => <BookCard key={book._id} book={book} ></BookCard>)
            }
       
     
      </div>
    </div>
  );
};

export default FeaturedBooks;
