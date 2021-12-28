import React from "react";
import styles from "./GameCover.module.scss";

export const GameCover = ({ image = "" }) => {
  return (
    <div
      className={styles.gameCover}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};
