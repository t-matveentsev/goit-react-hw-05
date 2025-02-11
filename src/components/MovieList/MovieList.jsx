import { NavLink, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {movies.map((item) => (
          <li key={item.id} className={s.listItem}>
            <NavLink
              state={location}
              to={`/movies/${item.id}`}
              className={s.listLink}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                className={s.listImg}
              />
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
