import React, { useContext } from 'react';
import './SearchResult.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const SearchResult = ({ result, id }) => {

      // Tonmoy start 

  const {darkMode} = useContext(AuthContext);

  // Tonmoy end

    return (
        <Link to={`details/${id}`}
      className= {`${darkMode?"search-result text-gray-700 hover:no-underline":"search-result hover:no-underline"}`}
    >
      {result}
    </Link>
  );
};

export default SearchResult;