import { useState, useEffect } from "react";
import MoviesList from "../MoviesList";

import { getTrending } from "../../api/api";
import s from "./Home.module.css";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    return getTrending()
      .then((movies) => movies.results)
      .then(setMovies)
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1 className={s.title}>TRENDING MOVIES</h1>
      <MoviesList movies={movies}></MoviesList>
    </>
  );
}
