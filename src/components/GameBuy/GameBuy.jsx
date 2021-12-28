import React from "react";
import styles from "./GameBuy.module.scss";
import { Button } from "../Button";

export const GameBuy = ({ game }) => {
  return (
    <div className={styles.GameBuy}>
      <span className={styles.price}>{game.price} rub.</span>
      <Button type="primary" onClick={() => {}}>
        В карзину
      </Button>
    </div>
  );
};
