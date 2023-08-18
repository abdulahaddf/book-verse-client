import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"
import UseBooks from "../../../hooks/UseBooks";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const { books, loading } = UseBooks()
  const fetchData = (value) => {
    const results = books.filter((b) => {
      return (
        value &&
        b &&
        b.title &&
        b.title.toLowerCase().includes(value)
      );
    });
    setResults(results);
    // console.log(results)
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;