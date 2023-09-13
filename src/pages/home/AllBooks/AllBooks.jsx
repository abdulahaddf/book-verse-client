import { useState, useEffect } from "react";

import UseBooks from "../../../hooks/UseBooks";
import Loader from "../../../shared/components/loader/Loader";
import ProductCard from "../../../shared/components/productCard/ProductCard";

const AllBooks = () => {
  const { books, loading } = UseBooks();
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [sortBy, setSortBy] = useState("default");
  const [asc, setAsc] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // tonmoy start
    const book = books.reverse()
    let sortedBooks = [...book];
    //  tonmoy end
    // ------------Filter by category------------
    if (selectedCategory !== "default") {
      sortedBooks = sortedBooks.filter(
        (book) => book.category === selectedCategory
      );
    }

    //--------- Sort by price (Low to High)------------
    if (sortBy === "real_price") {
      sortedBooks.sort((a, b) => a.real_price - b.real_price);
    }

    //--------- Sort by rating (Low to High)------------
    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => a.rating - b.rating);
    }

    //--------- Sort by price (High to Low) ------------
    if (sortBy === "-real_price") {
      sortedBooks.sort((a, b) => b.real_price - a.real_price);
    }

    //--------- Sort by rating (High to Low) ------------
    if (sortBy === "-rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    }

    setFilteredBooks(sortedBooks);
  }, [selectedCategory, sortBy, asc, books]);

   // ---------- pagination calculated ---------------
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setAsc((prevAsc) => !prevAsc);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="text-3xl text-center font-semibold my-5">
        All Your Books
      </h1>

      {/* ------------filtering code start by Zihad ----------- */}
      <div className="p-3 w-11/12 mx-auto mb-8 shadow rounded-md">
        <div className="flex-row md:flex items-center justify-between">
          <div className="rounded-sm bg-[#126e9d] text-white flex py-3 px-2">
            <p className="font-semibold">Category:</p>
            <select
              className="font-semibold max-w-xs bg-[#126e9d] focus:outline-none"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="Fiction">Fiction</option>
              <option value="Comics">Comics</option>
              <option value="Mystery and Thriller">Mystery and Thriller</option>
              <option value="Romance">Romance</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Biography and Memoir">Biography and Memoir</option>
              <option value="Sports">Sports</option>
              <option value="History Science and Nature">
                History Science and Nature
              </option>
              <option value="Art and Photography">Art and Photography</option>
              <option value="Cookbooks and Food Travel">
                Cookbooks and Food Travel
              </option>
              <option value="Travel">Travel</option>
              <option value="Business and Economics">
                Business and Economics
              </option>
              <option value="Young Adult">Young Adult</option>
              <option value="Horror">Horror</option>
              <option value="Classics">Classics</option>
            </select>
          </div>

          <div className="flex gap-8 mt-8 md:mt-0">
            <div className="rounded-sm bg-[#126e9d] text-white flex py-3 px-2">
              <p className="font-semibold">Price:</p>
              <select
                className="font-semibold max-w-xs bg-[#126e9d] focus:outline-none"
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="real_price">Low to High</option>
                <option value="-real_price">High to Low</option>
              </select>
            </div>

            <div className="rounded-sm bg-[#126e9d] text-white flex py-3 px-2">
              <p className="font-semibold">Rating:</p>
              <select
                className="font-semibold max-w-xs bg-[#126e9d] focus:outline-none"
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="rating">Low to High</option>
                <option value="-rating">High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/*------------ filtering code end by Zihad --------------*/}

      {/* -----------display all start by Zihad book ---------- */}

      {/* <div className="grid lg:grid-cols-4 2xl:grid-cols-4  gap-10 content-center my-5 w-11/12 mx-auto">
        {paginatedBooks.map((book) => (
          <BookCard key={book._id} book={book} ></BookCard>
          
        ))}
     
      </div> */}

      {/* tonmoy start */}
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 gap-10 content-center my-5 w-10/12 mx-auto justify-center">
        {paginatedBooks.map((book) => (


          <ProductCard key={book._id} data={book} ></ProductCard>



        ))}
      </div>
      {/* tonmoy end */}

      {/* -----------display all end by Zihad book ---------- */}
      {/*----------- Pagination started by zihad---------- */}
      <div className="flex justify-center mt-8">


      <button
          className={`px-4 py-2 rounded-md mx-2 ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#126e9d] text-white hover:bg-[#10aade]"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`${currentPage === index + 1
              ? "bg-[#126e9d] text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              } px-3 py-1 mx-1 rounded-md cursor-pointer`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`px-4 py-2 rounded-md mx-2 ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#126e9d] text-white hover:bg-[#10aade]"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {/*----------- Pagination end by zihad---------- */}
    </div>
  );
};

export default AllBooks;
