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
      <div className="grid  md:grid-cols-3  xl:grid-cols-5 gap-8 place-items-center py-5">
      {
                books?.slice(0,5).map(book => <ProductCard key={book._id} data={book} ></ProductCard>)
            }
       
     
      </div>
    </div>
  );
};

export default FeaturedBooks;
