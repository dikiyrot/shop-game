import React, { useState } from "react";
import styles from "./CartBlock..module.scss";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../utils";
import { CartMenu } from "../CartMenu";
import { ItemsInCart } from "../ItemsInCart";

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);

  return (
    <div className={styles.cartBlock}>
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        className={styles.cartBlock__icon}
        size={25}
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className={styles.cartBlock__totalPrice}>2335 грн.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => {}} />}
    </div>
  );
};

export default CartBlock;
