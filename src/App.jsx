import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MoviesPage from "./Pages/MoviesPage";
import Navigation from "./components/Navigation/Navigation";

export default function App() {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </main>
  );
}
