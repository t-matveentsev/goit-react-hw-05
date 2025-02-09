import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { fetchSearchMovies } from "../../services/api";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    if (!query) return;
    async function fetchArticles() {
      try {
        const movies = await fetchSearchMovies(query);
        setSearchMovies((prev) => [...prev, ...movies]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchArticles();
  }, [query]);

  const handleSetQuery = (newQuery) => {
    setQuery(newQuery);
    setSearchMovies([]);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSetQuery} />
      <MovieList movies={searchMovies} />
    </div>
  );
};

export default MoviesPage;
