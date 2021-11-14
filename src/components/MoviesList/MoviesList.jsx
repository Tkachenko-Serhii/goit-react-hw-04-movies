import { Link, useLocation } from "react-router-dom";
import React from "react";

import s from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map(
        (movie) =>
          movie.original_title && (
            <li key={movie.id} className={s.item}>
              <Link
                className={s.link}
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from:
                      location.pathname === "/"
                        ? "/"
                        : "/movies" + location.search,
                  },
                }}
              >
                <div className={s.movie}>
                  {movie.poster_path ? (
                    <img
                      className={s.movie_img}
                      src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                      alt={movie.original_title}
                    />
                  ) : (
                    <img
                      className={s.movie_img}
                      src='https://bookslibs.info/assets/general/images/no_poster.jpg'
                      alt={movie.original_title}
                    />
                  )}
                </div>
                <div className={s.movie_info}>
                  <h2 className={s.movie_title}>{movie.original_title}</h2>
                  <span className={s.movie_raiting}>{movie.vote_average}</span>
                </div>
              </Link>
            </li>
          )
      )}
    </ul>
  );
}
