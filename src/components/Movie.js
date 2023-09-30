import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, year, summary, genres}) {
    return (
        <div className={styles.movie}>
            <Link to={`/movie/${id}`} className={styles.link}>
            <img src={coverImg} alt={title}/>
            </Link>
            <h2>
                <Link to={`/movie/${id}`} className={styles.link}>
                    {title}
                </Link>
            </h2>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;