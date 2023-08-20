import Heading from "../heading/Heading";
import BookCard from "../BookCard/BookCard";
import { Link } from "react-router-dom";
import UseBooks from "../../../hooks/UseBooks";

const BestSelling = () => {
  const { books } = UseBooks();
  return (
    <div className="section">
      <div className="flex justify-between items-center">
        <Heading title={"Best Selling"}></Heading>
        <Link className="btn-primary ">See More</Link>
      </div>
      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-10 content-center">
        {books?.slice(4, 8).map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
