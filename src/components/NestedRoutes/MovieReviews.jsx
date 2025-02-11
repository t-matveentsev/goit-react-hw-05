import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieReviews(movieId);
      setMovieReviews(data);
    };
    getData();
  }, [movieId]);

  if (!movieReviews) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2 className={s.title}>Reviews</h2>
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map((review) => (
            <li key={review.id}>
              <h3 className={s.subTitle}>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};

export default MovieReviews;
