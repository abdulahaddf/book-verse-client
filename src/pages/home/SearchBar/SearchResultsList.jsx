/* eslint-disable react/prop-types */
import React from 'react';
import './SearchResultsList.css'
import SearchResult from './SearchResult';

const SearchResultsList = ({ results }) => {
    return (
        <div className='results-list'>
            
            {results.map((result,_id)=>
             <SearchResult key={_id} result={result.title} id={result._id}></SearchResult>
            )}
           
        </div>
    );
};

export default SearchResultsList;