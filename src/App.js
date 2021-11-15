import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import "./App.css";

const Home = lazy(() =>
  import("./components/views/Home" /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import("./components/views/MoviesPage" /* webpackChunkName: "movies-page" */)
);
const MoviesDetailsPage = lazy(() =>
  import(
    "./components/views/MovieDetailsPage" /* webpackChunkName: "movie-details" */
  )
);

export default function App() {
  return (
    <div className='container'>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:id/*' element={<MoviesDetailsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
