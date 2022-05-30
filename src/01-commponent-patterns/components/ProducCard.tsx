import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import { createContext } from "react";
import { ProductContextProps, Props } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProducCard = ({ product, children, className, style, onChange }: Props) => {
  
  const { counter, increaseBy } = useProduct({onChange, product});
  
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className} `} style={style}>
        {children}
        {/* <ProductImage img={img} />
      <ProductTitle title={title} />
      <ProductBottons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

