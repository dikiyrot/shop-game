import React from "react";
import styles from "./GamePage.module.scss";
import { useSelector } from "react-redux";
import { GameCover } from "../../components/GameCover";
import { GameGenre } from "../../components/GameGenre";
import { GameBuy } from "../../components/GameBuy";

export const GamePage = () => {
  const game = useSelector((state) => state.games.currentGame);

  if (!game) return null;

  return (
    <div className={styles.GamePage}>
      <h1 className={styles.title}>{game.title}</h1>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className={styles.rightSide}>
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className={styles.secondaryText}>
            Popular labels for this product:
          </p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className={styles.buyGame}>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};
