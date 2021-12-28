import React from "react";
import styles from "./CartItem.module.scss";

export const CartItem = ({ title, price, id }) => {
  return (
    <div className={styles.CartItem}>
      <span>{title}</span>
      <div className={styles.price}>
        <span>{price} rub.</span>
      </div>
    </div>
  );
};
