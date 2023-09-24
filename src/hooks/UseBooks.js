import { useRef } from "react";
import { useState, useEffect } from "react";

const UseBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    setUserNotFound(false);
    fetch(`https://book-verse-server-phi.vercel.app/allBooks?search=${search}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        return res.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);

        // Set userNotFound flag if no results are found
        if (data.length === 0) {
          setUserNotFound(true);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [search]);

  return {
    books,
    setBooks,
    loading,
    setLoading,
    search,
    setSearch,
    searchRef,
    error,
    userNotFound,
  };
};

export default UseBooks;
