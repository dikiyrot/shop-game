import React from "react";
import styles from "./CartMenu.module.scss";
import { calcTotalPrice } from "../../utils";
import { Button } from "../Button";
import { CartItem } from "../CartItem";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className={styles.CartMenu}>
      <div className={styles.gameList}>
        {items?.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Cart empty"}
      </div>
      {items?.length > 0 && (
        <div className={styles.arrange}>
          <div className={styles.totalPrice}>
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} rub.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      )}
    </div>
  );
};
