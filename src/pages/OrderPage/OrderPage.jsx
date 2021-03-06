import React from "react";
import styles from "./OrderPage.module.scss";
import { useSelector } from "react-redux";
import { OrderItem } from "../../components/OrderItem";
import { calcTotalPrice, enumerate } from "../../utils";

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (!items.length) {
    return <h1>Your cart is empty!</h1>;
  }

  return (
    <div className={styles.OrderPage}>
      <div className={styles.leftSide}>
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className={styles.rightSide}>
        <div className={styles.totalPrice}>
          <span>
            {items.length}{" "}
             goods on sum{" "}
            {calcTotalPrice(items)} $
          </span>
        </div>
      </div>
    </div>
  );
};
