import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GameCover } from "../GameCover";
import { GameBuy } from "../GameBuy";
import { GameGenre } from "../GameGenre";
import styles from "./GameItem.module.scss";
import { setCurrentGame } from "../../redux/games/reducer";

export const GameItem = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  };
  return (
    <div className={styles.gameItem} onClick={handleClick}>
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
