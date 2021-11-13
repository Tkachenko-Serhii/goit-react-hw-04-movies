import { useState, useEffect } from "react";
import {
  Link,
  useNavigate,
  useLocation,
  Route,
  Outlet,
  useParams,
} from "react-router-dom";
import { alert } from "@pnotify/core";

import { getMovieDetails } from "../../api/api";
import Cast from "../Cast";
import Reviews from "../Reviews";
import s from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const navigation = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [filmDetails, setFilmDetails] = useState(null);

  useEffect(() => {
    return getMovieDetails(id).then(setFilmDetails);
  }, [id]);
  console.log(filmDetails);
  const onClickBack = () => {
    navigation(location.state?.from ?? "/");
  };

  if (!filmDetails) {
    return alert({
      type: "error",
      text: `No films for request`,
    });
  }
  return (
    <>
      <button type='button' className={s.button} onClick={onClickBack}>
        Back
      </button>
      <div>
        <h2 className={s.title}>{filmDetails.original_title}</h2>
        <h3 className={s.title}>Overview</h3>
        <p>{filmDetails.overview}</p>
        <h3 className={s.title}>Genres</h3>
        <ul className={s.list}>
          {filmDetails.genres?.map(
            (genre) =>
              filmDetails.genres && (
                <li key={genre.id} className={s.item}>
                  {genre.name}
                </li>
              )
          )}
        </ul>
      </div>
      <ul>
        <li key={0} className={s.link}>
          <Link
            to={{
              pathname: `/movies/${filmDetails.id}/cast`,
              state: { from: location.state?.from },
            }}
          >
            Cast
          </Link>
        </li>
        <li key={1} className={s.link}>
          <Link
            to={{
              pathname: `/movies/${filmDetails.id}/reviews`,
              state: { from: location.state?.from },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>

      <Route path={`${location}/cast`} element={<Cast id={id} />} />
      <Route path={`${location}/reviews`} element={<Reviews id={id} />} />
      <Outlet />
    </>
  );
}
