import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { FC } from "react";

interface Product {
  id: string;
  title: string;
  img?: string;
}
interface ProductButtonsProps {
  counter: number;
  increaseBy: (value: number) => void;
}
export const ProductImage = ({ img = "" }) => (
  <img
    className={styles.productImg}
    src={img ? img : noImage}
    alt="Coffe Mug"
  />
);

export const ProductTitle = ({ title }: { title: string }) => (
  <span className={styles.productDescription}>{title} </span>
);

export const ProductBottons = ({
  counter,
  increaseBy,
}: ProductButtonsProps) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {counter} </div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
export const ProducCard: FC<Product> = ({ id, title, img }) => {
  const { counter, increaseBy } = useProduct();
  return (
    <div className={styles.productCard}>
      <ProductImage img={img} />
      <ProductTitle title={title} />
      <ProductBottons counter={counter} increaseBy={increaseBy} />
    </div>
  );
};
