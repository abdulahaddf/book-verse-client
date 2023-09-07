import { Link } from "react-router-dom";
import Heading from "../heading/Heading";
import UseBooks from "../../../hooks/UseBooks";
import ProductCard from "../productCard/ProductCard";
import Skeleton from "react-loading-skeleton";



const FeaturedBooks = () => {
  const {books , loading} = UseBooks();
  console.log(books)
  return (
    <div className="section">
      <div className="flex justify-between items-center">
        <Heading title={"Featured Books"}></Heading>
        <Link className="btn-fifth ">See More</Link>
      </div>
      {/* <Skeleton count={3} className="my-2 h-10" />  */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-10 place-items-center items-start my-5 py-5">
      {
                books?.slice(37,42).map(book => <ProductCard key={book._id} data={book} loading={loading} ></ProductCard>)
            }
       
     
      </div>
    </div>
  );
};

export default FeaturedBooks;
