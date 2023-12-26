import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter key pressed');
      handleSearch(query.trim());
    }
    else{
        console.log('errorr');
    }
  };  

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={handleChange}
      onKeyDown={handleKeyDown} // Use onKeyDown instead of onKeyPress
    />
  );
};

export default SearchBar;
