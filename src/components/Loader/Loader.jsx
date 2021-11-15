import React from "react";
import Loader from "react-loader-spinner";
import s from "./Loader.module.css";

export default function LoaderFnc() {
  return (
    <div className={s.loader}>
      <Loader
        type='ThreeDots'
        color='#a31111'
        height={50}
        width={50}
        timeout={3000}
      />
    </div>
  );
}
