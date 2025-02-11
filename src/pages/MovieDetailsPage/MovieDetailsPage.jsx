import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackUrl = useRef(location?.state ?? "/movies");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieById(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={s.wrapper}>
      <Link className={s.backBtn} to={goBackUrl.current}>
        Go back
      </Link>
      <div className={s.cardInfo}>
        <img
          className={s.cardImg}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <div className={s.infoWrapper}>
          <h2>{movie.title}</h2>
          <p>Release date: {movie.release_date}</p>
          <p>Score: {Math.round(movie.vote_average * 10) / 10}/10</p>
          <p>Overview: {movie.overview}</p>
          <p>Genre: {movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>

      <div className={s.navInfo}>
        <NavLink to={`cast`}>Actors</NavLink>
        <NavLink to={`reviews`}>Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
