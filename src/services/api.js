import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDM2Yjk0ZmEyNzkyNTA5OWRhOTJmMmU1YjRlZmRjYSIsIm5iZiI6MTczOTA2NzAyNy45NDU5OTk5LCJzdWIiOiI2N2E4MGU5Mzg5ZjA1ZTE2MTlmMTJhNDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tmz8dnt1QlJyTR8ujwUfiRbUCP6zxU23n1Dd4fd_jHQ";
const BASE_URL = "https://api.themoviedb.org/3";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
});

export async function fetchTrendingMovies() {
  const response = await axiosInstance.get("/trending/movie/day");
  return response.data.results;
}

export async function fetchSearchMovies(query) {
  const response = await axiosInstance.get("/search/movie", {
    params: { query },
  });
  return response.data.results;
}

export async function fetchMovieById(movieId) {
  const response = await axiosInstance.get(`/movie/${movieId}`);
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await axiosInstance.get(`/movie/${movieId}/credits`);
  return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
  const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
  return response.data.results;
}
