import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import { createContext } from "react";
import { ProductContextProps, Props } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProducCard = ({ product, children }: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={img} />
      <ProductTitle title={title} />
      <ProductBottons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

