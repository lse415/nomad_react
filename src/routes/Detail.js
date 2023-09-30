import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import styles from "./Dtail.module.css";

function Detail() {
    const {id} = useParams();
    const [movie, setMovie] = useState("");
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>
            <img src={movie.medium_cover_image}/>
            <h1>{movie.title}</h1>
            <h3>{movie.year}</h3>
            <p>{movie.summary && movie.summary.length > 235 ? `${movie.summary.slice(0, 235)}...` : movie.summary}</p>
            <p>{movie.genres}</p>
        </div>
        

    );
}

export default Detail;