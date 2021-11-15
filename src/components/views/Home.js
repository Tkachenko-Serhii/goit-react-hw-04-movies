import { useState, useEffect } from "react";
import MoviesList from "../MoviesList";
import LoadMore from "../LoadMore";
import { getTrending } from "../../api/api";
import s from "./Home.module.css";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    return getTrending(page)
      .then((movies) => movies.results)
      .then((data) => setMovies((prevState) => [...prevState, ...data]))
      .catch((error) => console.log(error));
  }, [page]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <h1 className={s.title}>TRENDING MOVIES</h1>
      <MoviesList movies={movies}></MoviesList>
      {movies.length > 0 && <LoadMore onLoadMore={onLoadMore} />}
    </>
  );
}
