import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import styles from "./Detail.module.css";
import {Link} from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState("");

    const getMovie = async () => {
        const json = await(
            await fetch
            (`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
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

        <div className={styles.background}
            style={{ backgroundImage: `url(${movie.background_image})` }}>
            <div className={styles.Detail_bg}></div>
        </div>

        <div className={styles.detail_card}>
            <img src={movie.medium_cover_image} alt={movie.title}/>
            <div className={styles.detail}>
                <h1>{movie.title}</h1>
                <h3>{movie.year}</h3>
                <p>{movie.summary}</p> 
                <p>{movie.genres && movie.genres.join(", ")}</p>
            </div>
        </div>
        </>
        )}
    </div>

    );
}

export default Detail;
