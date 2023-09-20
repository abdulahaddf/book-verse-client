import { FaSearch } from "react-icons/fa";
import UseBooks from "../../hooks/UseBooks";
import Loader from "../../shared/components/loader/Loader";
import ManageBooksCard from "./ManageBooksCard";
import { useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
const ManageBooks = () => {
  // Tonmoy Start

  const {darkMode}=useContext(AuthContext)

  //  Tonmoy end
  const { books, setBooks, loading, searchRef, setSearch, userNotFound } =
    UseBooks();
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    let sortedBooks = [...books];
    setFilteredBooks(sortedBooks);
  }, [books]);

  if (loading) {
    return <Loader />;
  }

  // ---------- pagination calculated ---------------
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearch = () => {
    setSearch(searchRef.current.value);
    console.log(searchRef.current.value);
  };

  return (
    <div className="w-[390px] md:w-full mx-auto h-full p-2 lg:p-4 mt-10">
      <h2 className="text-4xl font-bold text-center">Books management</h2>

      <div className="flex justify-start items-center mt-8">
        <input
          type="text"
          ref={searchRef}
          placeholder="Find Book"
          className="input input-bordered focus:outline-none border-[#126e9d] max-w-xs rounded-sm text-slate-600"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          onClick={handleSearch}
          className={darkMode?"btn rounded-sm bg-white text-[#10aade] ml-2 hover:bg-white  hover:text-black":"btn rounded-sm bg-[#126e9d] ml-2 text-white hover:text-black"}
        >
          <FaSearch></FaSearch>
        </button>
      </div>

      {userNotFound ? (
        <div className="my-10 text-5xl text-[#126e9d] font-bold text-center">
          Book not found. <br />
          <span className="text-base text-rose-400">
            please enter the correct value and try again
          </span>
        </div>
      ) : null}

      {loading ? (
        <Loader />
      ) : (
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {paginatedBooks?.map((book) => (
            <ManageBooksCard
              key={book._id}
              book={book}
              books={books}
              setBooks={setBooks}
            ></ManageBooksCard>
          ))}
        </div>
      )}

      {/*----------- Pagination started by zihad---------- */}
      {/* Pagination */}
      <div className="flex justify-center ">
        <button
          className={`px-4 py-2 rounded-md mx-2 ${
            currentPage === 1
              ? "bg-slate-300 text-gray-500 cursor-not-allowed"
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
                : "bg-slate-200 hover:bg-gray-300 text-gray-700"
            } px-3 py-1 mx-1 rounded-md cursor-pointer`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`px-4 py-2 rounded-md mx-2 ${
            currentPage === totalPages
              ? "bg-slate-300 text-gray-500 cursor-not-allowed"
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

export default ManageBooks;
