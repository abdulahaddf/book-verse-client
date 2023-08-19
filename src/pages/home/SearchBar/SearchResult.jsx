import React from 'react';
import './SearchResult.css'
import { Link } from 'react-router-dom';

const SearchResult = ({ result, id }) => {
    
    return (
        <Link to={`details/${id}`}
      className="search-result"
    >
      {result}
    </Link>
  );
};

export default SearchResult;