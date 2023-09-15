import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"
import UseBooks from "../../../hooks/UseBooks";
import { AuthContext } from "../../../provider/AuthProvider";

export const SearchBar = ({ setResults }) => {

  // Tonmoy start 

  const {darkMode} = useContext(AuthContext);

  // Tonmoy end
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
    <div className={`input-wrapper ${darkMode===true? ' bg-gray-100 text-red':'border-red  border-2 '} relative z-50`}>
      <FaSearch className="text-sm " id="search-icon " />
      <input className="text-sm font-normal text-gray-700"
        placeholder=" Search in Book Verse"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;






