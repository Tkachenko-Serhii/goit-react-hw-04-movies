import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { alert } from "@pnotify/core";

import { searchFilms } from "../../api/api";
import MoviesList from "../MoviesList";
import s from "./MoviesPage.module.css";

export default function MoviesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (location.search !== "") {
      const prevQuery = location.search.split("=")[1];
      searchFilms(prevQuery)
        .then((films) => films.results)
        .then((arr) => {
          if (arr.length === 0)
            alert({
              type: "error",
              text: `No films for request: ${prevQuery}`,
            });
          setMovies(arr);
        });
      setQuery(prevQuery);
    }
  }, [location.search]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return alert({
        type: "error",
        text: "Please, enter more specific query",
      });
    }
    navigate(`?query=${query}`);
  };

  return (
    <>
      <div className={s.search}>
        <form className={s.form} onSubmit={onSubmit}>
          <input
            className={s.input}
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Enter search query'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button type='submit' className={s.button}>
            Search
          </button>
        </form>
      </div>
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
