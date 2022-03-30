import React from "react";
import styles from "./OrderItem.module.scss";
import { GameCover } from "../GameCover";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { deleteItemFromCart } from "../../redux/cart/reducer";

export const OrderItem = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };

  return (
    <div className={styles.OrderItem}>
      <div className={styles.cover}>
        <GameCover image={game.image} />
      </div>
      <div className={styles.title}>
        <span>{game.title}</span>
      </div>
      <div className={styles.price}>
        <span>{game.price} $</span>
        <AiOutlineCloseCircle
          size={25}
          className={styles.deleteIcon}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
