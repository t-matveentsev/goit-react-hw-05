// import MoviesPage from "./Pages/MoviesPage";
// import MovieDetailsPage from "./Pages/MovieDetailsPage";
// import MovieCast from "./components/NestedRoutes/MovieCast";
// import MovieReviews from "./components/NestedRoutes/MovieReviews";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import NotFoundPage from "./views/NotFoundPages/NotFoundPage";
import { lazy, Suspense } from "react";

const MoviesPage = lazy(() => import("./views/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/NestedRoutes/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/NestedRoutes/MovieReviews")
);

export default function App() {
  return (
    <main>
      <Navigation />
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </main>
  );
}
