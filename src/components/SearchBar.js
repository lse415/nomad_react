// SearchBar.js
import React, { useState } from 'react';
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  // State to store the search term entered by the user
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle the search button click
  const handleSearch = () => {
    // Call the provided onSearch function with the current search term
    // as an argument
    onSearch(searchTerm);
  };

  return (
    <div className={styles['search-container']}>
    <input className={styles['search-input']}
      type="text"
      placeholder="Search for a movie..."
      value={searchTerm}
      // Update the search term when the user types in the input field
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button className={styles['search-button']} onClick={handleSearch}>
      Search
    </button>
  </div>
  );
}

export default SearchBar;