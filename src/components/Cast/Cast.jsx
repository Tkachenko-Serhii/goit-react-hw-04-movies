import { useState, useEffect } from "react";
import { alert } from "@pnotify/core";

import { getMovieCredits } from "../../api/api";

import s from "./Cast.module.css";

export default function Cast({ id }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    return getMovieCredits(id).then(setActors);
  }, [id]);
  console.log(actors);

  return (
    <>
      {actors === [] &&
        alert({
          type: "error",
          text: "We have no information about the cast",
        })}
      <ul className={s.list}>
        {actors.map(
          (actor) =>
            actor.profile_path && (
              <li key={actor.id} className={s.item}>
                <img
                  src={"https://image.tmdb.org/t/p/w300/" + actor.profile_path}
                  alt={actor.name}
                />
                <h2 className={s.title}>{actor.name}</h2>
              </li>
            )
        )}
      </ul>
    </>
  );
}
