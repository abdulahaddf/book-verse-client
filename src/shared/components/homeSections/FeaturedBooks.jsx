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
       
      </div>
      {
        loading ? <Skeleton count={3} className="my-4 h-28" /> :  <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-10 place-items-center items-start my-5 py-5">
        {
                  books?.slice(5,10).map(book => <ProductCard key={book._id} data={book} loading={loading} ></ProductCard>
                  )
              }
         
       
        </div>
      }
     
    </div>
  );
};

export default FeaturedBooks;
