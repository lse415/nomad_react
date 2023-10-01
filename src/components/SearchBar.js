// SearchBar.js
import React, { useState } from 'react';
import styles from "./SearchBar.module.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className={styles['search-container']}>
    <input className={styles['search-input']}
      type="text"
      placeholder="Search for a movie..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button className={styles['search-button']} onClick={handleSearch}>
      Search
    </button>
  </div>
  );
}

export default SearchBar;