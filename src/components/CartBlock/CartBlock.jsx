import React from "react";
import styles from "./CartBlock..module.scss";
import { BiCartAlt } from "react-icons/bi";

const CartBlock = () => {
  return (
    <div className={styles.cartBlock}>
      <BiCartAlt className={styles.cartBlock__icon} size={25} />
      <span className={styles.cartBlock__totalPrice}>2335 грн.</span>
    </div>
  );
};

export default CartBlock;
