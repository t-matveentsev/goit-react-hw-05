import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { fetchSearchMovies } from "../../services/api";

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;
    async function fetchMovies() {
      try {
        const movies = await fetchSearchMovies(query);
        setSearchMovies(movies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [query]);

  const handleSetQuery = (newQuery) => {
    if (newQuery === query) return;
    setSearchMovies([]);
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <SearchBar handleSearch={handleSetQuery} initialQuery={query} />
      <MovieList movies={searchMovies} />
    </div>
  );
};

export default MoviesPage;
