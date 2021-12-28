import React from "react";
import styles from "./GameItem.module.scss";
import { GameCover } from "../GameCover";
import { GameBuy } from "../GameBuy";
import { GameGenre } from "../GameGenre";

export const GameItem = ({ game }) => {
  return (
    <div className={styles.gameItem}>
      <GameCover image={game.image} />
      <div className={styles.gameItem__details}>
        <div className={styles.gameItem__title}>{game.title}</div>
        <div className={styles.gameItem__genre}>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className={styles.gameItem__buy}>
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};
