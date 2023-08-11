import { Link } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import Heading from "../heading/Heading";

const FeaturedBooks = () => {
  return (
    <div className="section">
      <div className="flex justify-between items-center">
        <Heading title={"Featured Books"}></Heading>
        <Link className="btn-primary ">See More</Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-center">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

export default FeaturedBooks;
