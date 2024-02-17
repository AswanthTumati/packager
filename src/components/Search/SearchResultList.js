// SearchResultList.js
import React from 'react';

const SearchResultList = ({ results, onResultClick }) => {
  if (results.length === 0) {
    return (
      <div className="search-results">
        <p>No results found</p>
        {/* Add a funny picture here */}
      </div>
    );
  }

  return (
    <div className="search-results">
      {results.map((result) => (
        <div key={result.id} className="result-item" onClick={() => onResultClick(result.id)}>
          <p>{result.name}</p>
          <p>{result.headline}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResultList;
