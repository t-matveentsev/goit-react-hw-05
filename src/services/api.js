// import axios from "axios";
// const url =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

// const options = {
//   headers: {
//     Authorization:
//       "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDM2Yjk0ZmEyNzkyNTA5OWRhOTJmMmU1YjRlZmRjYSIsIm5iZiI6MTczOTA2NzAyNy45NDU5OTk5LCJzdWIiOiI2N2E4MGU5Mzg5ZjA1ZTE2MTlmMTJhNDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tmz8dnt1QlJyTR8ujwUfiRbUCP6zxU23n1Dd4fd_jHQ",
//   },
// };

// axios.defaults.headers.common = {
//   Authorization: `eyJhdWQiOiJiMDM2Yjk0ZmEyNzkyNTA5OWRhOTJmMmU1YjRlZmRjYSIsIm5iZiI6MTczOTA2NzAyNy45NDU5OTk5LCJzdWIiOiI2N2E4MGU5Mzg5ZjA1ZTE2MTlmMTJhNDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0`,
// };
// axios.defaults.baseURL =
//   "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

// export const fetchRequest = async (query, page) => {
//   const response = await axios.get(
//     `https://api.unsplash.com/search/photos?query=${query}&page=${page}`
//   );
//   return response.data;
// };

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDM2Yjk0ZmEyNzkyNTA5OWRhOTJmMmU1YjRlZmRjYSIsIm5iZiI6MTczOTA2NzAyNy45NDU5OTk5LCJzdWIiOiI2N2E4MGU5Mzg5ZjA1ZTE2MTlmMTJhNDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tmz8dnt1QlJyTR8ujwUfiRbUCP6zxU23n1Dd4fd_jHQ",
//   },
// };

// fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", options)
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
