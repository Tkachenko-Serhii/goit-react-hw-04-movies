import React from "react";
import PropTypes from "prop-types";
import s from "./LoadMore.module.css";

export default function loadMore({ onLoadMore }) {
  return (
    <button type='button' className={s.button} onClick={onLoadMore}>
      Load more
    </button>
  );
}

loadMore.proTotypes = {
  onLoadMore: PropTypes.func.isRequired,
};
