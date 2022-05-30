import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { FC } from "react";

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProducCard: FC<Product> = ({id, title, img}) => {
  const { counter, increaseBy } = useProduct();
  return (
    <div className={styles.productCard}>
      <img
        className={styles.productImg}
        src={ img? img : noImage }
        alt="Coffe Mug"
      />
      {/* <img className={styles.productImg} src={ noImage } alt= 'Coffe Mug' /> */}
      <span className={styles.productDescription}>{title} </span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          {" "}
          -{" "}
        </button>
        <div className={styles.countLabel}> {counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};
