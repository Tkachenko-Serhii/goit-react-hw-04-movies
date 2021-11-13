import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";

const Home = lazy(() => import("./components/views/Home"));
const MoviesPage = lazy(() => import("./components/views/MoviesPage"));
const MoviesDetailsPage = lazy(() =>
  import("./components/views/MovieDetailsPage")
);

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loader</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:id/*' element={<MoviesDetailsPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
