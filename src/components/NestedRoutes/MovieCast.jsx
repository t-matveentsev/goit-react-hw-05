import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../services/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieCast(movieId);
      setMovieCast(data);
    };
    getData();
  }, [movieId]);

  if (!movieCast) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h3>Actors</h3>
      <ul>
        {movieCast.map((actor) => (
          <li key={actor.id}>
            <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} />
            <h3>{actor.name}</h3>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
