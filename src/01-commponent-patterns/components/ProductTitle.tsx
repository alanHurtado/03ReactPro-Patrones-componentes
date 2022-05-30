import { useContext } from 'react';
import { ProductContext } from './ProducCard';
import styles from "../styles/styles.module.css";

export interface PropsTitle{
    clasName?: string,
    title?: string,
    style?:  React.CSSProperties
}

export const ProductTitle = ({ title, clasName, style }: PropsTitle ) => {
    const {product} = useContext(ProductContext);
    return <span style={style} className={`${styles.productDescription} ${clasName} `}>{title?title:product.title} </span>;
};
