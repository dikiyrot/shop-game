import React from "react";
import styles from "./GameBuy.module.scss";
import { Button } from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
    <div className={styles.GameBuy}>
      <span className={styles.price}>{game.price} rub.</span>
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isItemInCart ? "Delete" : "Add"}
      </Button>
    </div>
  );
};
