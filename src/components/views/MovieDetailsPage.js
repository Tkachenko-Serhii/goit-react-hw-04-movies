import { useState, useEffect, lazy } from "react";
import {
  Link,
  useLocation,
  Route,
  useParams,
  Routes,
  useNavigate,
} from "react-router-dom";
import { alert } from "@pnotify/core";

import { getMovieDetails } from "../../api/api";
import s from "./MovieDetailsPage.module.css";

const Cast = lazy(() => import("../Cast/Cast"));
const Reviews = lazy(() => import("../Reviews"));

export default function MovieDetailsPage() {
  const navigation = useNavigate();
  const url = useLocation();
  const { id } = useParams();
  const [filmDetails, setFilmDetails] = useState([]);

  useEffect(() => {
    return getMovieDetails(id).then(setFilmDetails);
  }, [id]);

  const onClickBack = () => {
    navigation(-1);
  };

  return (
    <>
      {filmDetails === [] &&
        alert({
          type: "error",
          text: `No films for request`,
        })}

      <button type='button' className={s.button} onClick={onClickBack}>
        Back
      </button>
      <div>
        <h2 className={s.title}>{filmDetails.original_title}</h2>
        <h3 className={s.title}>Overview</h3>
        <p>{filmDetails.overview}</p>
        <h3 className={s.title}>Genres</h3>
      </div>
      <ul>
        <li key={0} className={s.link}>
          <Link
            to={{
              pathname: "cast",
            }}
          >
            Cast
          </Link>
        </li>
        <li key={1} className={s.link}>
          <Link
            to={{
              pathname: "reviews",
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path={`${url.pathname}/cast`} element={<Cast id={id} />} />
        <Route path={`${url.pathname}/reviews`} element={<Reviews id={id} />} />
      </Routes>
    </>
  );
}
