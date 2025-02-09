import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setTrends(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <section>
      <h1 className={s.title}>Trending Movies</h1>
      <MovieList className={s.list} movies={trends} />
    </section>
  );
};

export default HomePage;
