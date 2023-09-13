import { useState, useEffect, useRef } from "react";
import OldBookCard from "../../shared/components/OldBookCard/OldBookCard";
import { FaSearch } from "react-icons/fa";

const AllOldBooks = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);

  const [sortByPrice, setSortByPrice] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10; // Items per page

  const searchRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://book-verse-server-phi.vercel.app/oldBooks?search=${search}&sort=${sortByPrice}&page=${currentPage}&perPage=${perPage}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        const sortedData = data.map((book) => ({
          ...book,
          offer_price: parseFloat(book.offer_price),
        }));

        if (sortByPrice === "asc") {
          sortedData.sort((a, b) => a.offer_price - b.offer_price);
        } else if (sortByPrice === "desc") {
          sortedData.sort((a, b) => b.offer_price - a.offer_price);
        }

        setBooks(sortedData);
        setUserNotFound(sortedData.length === 0);
      } catch (error) {
        console.error("Error:", error);
        setUserNotFound(true);
      }
    };

    fetchData();
  }, [search, sortByPrice, currentPage]);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl text-center font-semibold mt-4 ">
        All Old Books
      </h1>

      {/* -----Searching and filtering start by zihad---*/}
      <div className="w-11/12 mx-auto flex-row md:flex justify-between items-center shadow rounded-md p-3 mt-4">
        <div className="flex justify-start items-center">
          <input
            type="text"
            ref={searchRef}
            placeholder="Find Book"
            className="input input-bordered focus:outline-none border-[#126e9d] max-w-xs rounded-sm"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            onClick={handleSearch}
            className="btn rounded-sm bg-[#126e9d] ml-2 text-white hover:text-black"
          >
            <FaSearch></FaSearch>
          </button>
        </div>

        <div className="text-center ">
          <button className="rounded-sm bg-[#126e9d] text-white flex py-3 px-2">
            <p className="font-semibold">Price:</p>
            <select
              className="font-semibold max-w-xs bg-[#126e9d] focus:outline-none"
              value={sortByPrice}
              onChange={(e) => setSortByPrice(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="desc">High to Low</option>
              <option value="asc">Low to High</option>
            </select>
          </button>
        </div>
      </div>

      {userNotFound ? (
        <div className="my-10 text-5xl text-[#126e9d] font-bold text-center">
          Book not found. <br />
          <span className="text-base text-rose-400">
            please enter the correct value and try again
          </span>
        </div>
      ) : null}

      {/* -----Searching and filtering end by zihad---*/}

      <div className="grid md:grid-cols-5 gap-8 w-11/12 mx-auto my-8">
        {books?.map((book) => (
          <OldBookCard key={book._id} book={book}></OldBookCard>
        ))}
      </div>

      {/* -----Pagination calculated start by zihad---*/}
      <div className="flex justify-center mt-4">
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
        <button
          className={`px-4 py-2 rounded-md mx-2 ${
            books.length < perPage
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#126e9d] text-white hover:bg-[#10aade]"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={books.length < perPage}
        >
          Next
        </button>
      </div>
      {/* -----Pagination calculated end by zihad---*/}
    </div>
  );
};

export default AllOldBooks;
