import { useState, useEffect } from "react";
import { alert } from "@pnotify/core";

import { getMovieReviews } from "../../api/api";

import s from "./Reviews.module.css";

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    return getMovieReviews(id).then(setReviews);
  }, [id]);
  console.log(reviews);
  return (
    <>
      {reviews === [] &&
        alert({
          type: "error",
          text: "Sorry, we did not find any reviews for this movie.",
        })}
      <ul className={s.list}>
        {reviews.map(
          (review) =>
            review.author && (
              <li key={review.id} className={s.item}>
                <h2 className={s.title}>{review.author}</h2>
                <p className={s.description}>{review.content}</p>
              </li>
            )
        )}
      </ul>
    </>
  );
}
