
import {useState, useEffect} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import {Link} from "react-router-dom";


function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
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
                <h1>Nomad Movie</h1>
            </Link>
        </div>

        <div className={styles.movies}>
            {movies.map(movie => (
            <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title.length > 15 ? 
                    `${movie.title.slice(0, 15)}...` : 
                    movie.title}
                bgImg={movie.background_image}

            />
        ))}
        </div>
        </>
        )}
    </div>
    );
}

export default Home;