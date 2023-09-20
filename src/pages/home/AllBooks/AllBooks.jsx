import { useState, useEffect, useContext } from "react";

import UseBooks from "../../../hooks/UseBooks";
import Loader from "../../../shared/components/loader/Loader";
import ProductCard from "../../../shared/components/productCard/ProductCard";
import { AuthContext } from "../../../provider/AuthProvider";
import LazyLoad from "react-lazy-load";
import { Helmet } from "react-helmet";

const AllBooks = () => {
  const { books, loading } = UseBooks();
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [sortBy, setSortBy] = useState("default");
  const [asc, setAsc] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Tonmoy start

  const { darkMode } = useContext(AuthContext);

  // Tonmoy end

  useEffect(() => {
    // tonmoy start

    const book = books.reverse();
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
    <LazyLoad>
       
      <div className={darkMode ? " bg-gray  py-5" : ""}>
      <Helmet>
          <title>Book Verse | All Books</title>
        </Helmet>
        <h1 className="text-3xl text-center font-semibold my-5">
          All Your Books
        </h1>

        {/* ----------filtering code start by Zihad ----------- */}
        <div
          className={
            darkMode
              ? "p-5 w-11/12 mx-auto mb-8  border-b-[1px]  rounded-md"
              : "p-5 w-11/12 mx-auto mb-8 shadow rounded-md"
          }
        >
          <div className="flex-row md:flex items-center justify-between">
            <div
              className={
                darkMode
                  ? "rounded-sm border-[1px] text-white flex py-3 px-2"
                  : "rounded-sm bg-[#126e9d] text-white flex py-3 px-2"
              }
            >
              <p className="font-semibold">Category:</p>
              <select
                className={
                  darkMode
                    ? "font-semibold max-w-xs bg-[#3C4043] rounded-md focus:outline-none   text-white  "
                    : "font-semibold max-w-xs bg-[#126e9d] focus:outline-none "
                }
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="default"
                >
                  Default
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="Fiction"
                >
                  Fiction
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="Comics"
                >
                  Comics
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="Mystery and Thriller"
                >
                  Mystery and Thriller
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="Romance"
                >
                  Romance
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="Science Fiction"
                >
                  Science Fiction
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="Biography and Memoir"
                >
                  Biography and Memoir
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="Sports"
                >
                  Sports
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="History Science and Nature"
                >
                  History Science and Nature
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="Art and Photography"
                >
                  Art and Photography
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="Cookbooks and Food Travel"
                >
                  Cookbooks and Food Travel
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="Travel"
                >
                  Travel
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="Business and Economics"
                >
                  Business and Economics
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="Young Adult"
                >
                  Young Adult
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="Horror"
                >
                  Horror
                </option>
                <option
                  className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                  value="Classics"
                >
                  Classics
                </option>
              </select>
            </div>

            <div className="flex gap-8 mt-8 md:mt-0">
              <div
                className={
                  darkMode
                    ? "rounded-sm  text-white border-[1px] flex py-3 px-2"
                    : "rounded-sm bg-[#126e9d] text-white flex py-3 px-2"
                }
              >
                <p className="font-semibold">Price:</p>
                <select
                  className={
                    darkMode
                      ? "font-semibold max-w-xs  bg-[#3C4043] rounded-md focus:outline-none  "
                      : "font-semibold max-w-xs bg-[#126e9d] focus:outline-none "
                  }
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option
                    className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                    value="default"
                  >
                    Default
                  </option>
                  <option
                    className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                    value="real_price"
                  >
                    Low to High
                  </option>
                  <option
                    className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                    value="-real_price"
                  >
                    High to Low
                  </option>
                </select>
              </div>

              <div
                className={
                  darkMode
                    ? "rounded-sm  text-white border-[1px] flex py-3 px-2"
                    : "rounded-sm bg-[#126e9d] text-white flex py-3 px-2"
                }
              >
                <p className="font-semibold">Rating:</p>
                <select
                  className={
                    darkMode
                      ? "font-semibold rounded-md  max-w-xs bg-[#3C4043] focus:outline-none "
                      : "font-semibold max-w-xs bg-[#126e9d] focus:outline-none"
                  }
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option
                    className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                    value="default"
                  >
                    Default
                  </option>
                  <option
                    className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                    value="rating"
                  >
                    Low to High
                  </option>
                  <option
                    className={darkMode ? "bg-[#3C4043] hover:to-black/90" : ""}
                    value="-rating"
                  >
                    High to Low
                  </option>
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
            <ProductCard key={book._id} data={book}></ProductCard>
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
              className={`${
                currentPage === index + 1
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
    </LazyLoad>
  );
};

export default AllBooks;
