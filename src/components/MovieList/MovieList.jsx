import { NavLink, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map((item) => (
          <li key={item.id}>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
            <NavLink state={location} to={`/movies/${item.id}`}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
