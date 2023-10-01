import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showAllMovies, setShowAllMovies] = useState(true);

  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredMovies);
    setShowAllMovies(false);
  };

  const handleShowAllMovies = () => {
    setSearchResults([]);
    setShowAllMovies(true);
    setSearchTerm('');
  }

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <>
          <div className={styles.header}>
            <Link to="/" className={styles.link}>
              <h1 onClick={handleShowAllMovies}>Nomad Movie</h1>
            </Link>
            {/* Add a key prop to SearchBar */}
            <SearchBar
              key={showAllMovies ? 'show-all' : 'search-results'} // Key based on state
              onSearch={handleSearch}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>

          {searchResults.length > 0 || !showAllMovies ? (
            <div className={styles.movies}>
              {searchResults.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={
                    movie.title.length > 15
                      ? `${movie.title.slice(0, 15)}...`
                      : movie.title
                  }
                  bgImg={movie.background_image}
                />
              ))}
            </div>
          ) : (
            <div className={styles.movies}>
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={
                    movie.title.length > 15
                      ? `${movie.title.slice(0, 15)}...`
                      : movie.title
                  }
                  bgImg={movie.background_image}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
