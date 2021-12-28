import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export const Button = ({ onClick, type, children, size = "s" }) => {
  const btnClass = classNames({
    [styles.btn]: true,
    [styles.btnSecondary]: type === "secondary",
    [styles.btnPrimary]: type === "primary",
    [styles.btnSmall]: size === "s",
    [styles.btnMedium]: size === "m",
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
