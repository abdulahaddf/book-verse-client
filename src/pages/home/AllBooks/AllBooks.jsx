import { useState, useEffect } from "react";
import BookCard from "../../../shared/components/BookCard/BookCard";
import UseBooks from "../../../hooks/UseBooks";
import Loader from "../../../shared/components/loader/Loader";

const AllBooks = () => {
  const { books, loading, } = UseBooks();
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [sortBy, setSortBy] = useState("default");
  const [asc, setAsc] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    let sortedBooks = [...books];

    // ------------Filter by category------------
    if (selectedCategory !== "default") {
      sortedBooks = sortedBooks.filter(
        (book) => book.category === selectedCategory
      );
    }

    //--------- Sort by price or rating------------
    if (sortBy === "real_price") {
      sortedBooks.sort((a, b) =>
        asc ? a.real_price - b.real_price : b.real_price - a.real_price
      );
    } else if (sortBy === "rating") {
      sortedBooks.sort((a, b) =>
        asc ? a.rating - b.rating : b.rating - a.rating
      );
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

      {/* ----------filtering code start by Zihad ----------- */}
      <div className="p-5 w-11/12 mx-auto mb-8 shadow rounded-md">
        <div className="flex-row md:flex items-center justify-between">
          <div className="flex">
            <p className="font-semibold">Category:</p>
            <select
              className="font-semibold max-w-xs"
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
            <div className="flex">
              <p className="font-semibold">Price:</p>
              <select
                className="font-semibold max-w-xs"
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="real_price">High to Low</option>
                <option value="-real_price">Low to High</option>
              </select>
            </div>

            <div className="flex">
              <p className="font-semibold">Rating:</p>
              <select
                className="font-semibold max-w-xs"
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

      {/*------------ filtering code end by Zihad  --------------*/}

      {/* -----------display all book ---------- */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 content-center my-5 w-11/12 mx-auto">
        {paginatedBooks.map((book) => (
          <BookCard key={book._id} book={book}></BookCard>
        ))}
      </div>

       {/*----------- Pagination started by zihad---------- */}
       <div className="flex justify-center mt-8">
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
      </div>
      {/*----------- Pagination end by zihad---------- */}
    </div>
  );
};

export default AllBooks;
