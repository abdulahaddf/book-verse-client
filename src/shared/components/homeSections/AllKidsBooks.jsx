import  { useEffect } from "react";
import UseBooks from "../../../hooks/UseBooks";
import ProductCard from "../productCard/ProductCard";
import { Helmet } from "react-helmet";

const AllKidsBooks = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  const { books, loading } = UseBooks();

  return (
    <div>
        <Helmet>
          <title>Book Verse | Kids Books</title>
        </Helmet>
      <h1 className="page-heading mb-[30px]">All Kids Books </h1>

      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-10 content-center w-[90%] mx-auto ">
        {books?.map((book) => {
          if (book.category.toLowerCase() === "kids") {
            return (
              <ProductCard
                key={book._id}
                data={book}
                loading={loading}
              ></ProductCard>
            );
          }
        })}
      </div>
    </div>
  );
};

export default AllKidsBooks;
