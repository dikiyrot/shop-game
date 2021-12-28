import React from "react";
import styles from "./ItemsInCart.module.scss";

export const ItemsInCart = ({ quantity = 0 }) => {
  return quantity > 0 ? (
    <div className={styles.ItemsInCart}>{quantity}</div>
  ) : null;
};
