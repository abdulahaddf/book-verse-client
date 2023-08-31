import { Link } from "react-router-dom";
import Heading from "../heading/Heading";
import UseBooks from "../../../hooks/UseBooks";
import ProductCard from "../productCard/ProductCard";



const FeaturedBooks = () => {
  const {books} = UseBooks();
  console.log(books)
  return (
    <div className="section">
      <div className="flex justify-between items-center">
        <Heading title={"Featured Books"}></Heading>
        <Link className="btn-primary ">See More</Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-10 place-items-center my-5 py-5">
      {
                books?.slice(0,5).map(book => <ProductCard key={book._id} data={book} ></ProductCard>)
            }
       
     
      </div>
    </div>
  );
};

export default FeaturedBooks;
