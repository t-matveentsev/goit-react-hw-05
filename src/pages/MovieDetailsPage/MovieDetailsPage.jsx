import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../services/api";

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
    <div>
      <Link to={goBackUrl.current}>Go Back</Link>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <h2>{movie.title}</h2>
        <p>Score:{Math.round(movie.vote_average * 10) / 10}/10</p>
        <p>{movie.overview}</p>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <Link to={`cast`}>Check actors</Link>
        <Link to={`reviews`}>Check reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
