import { useContext, CSSProperties } from "react";
import { ProductContext } from "./ProducCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface PropsImage {
  className?: string;
  img?: string;
  style?: CSSProperties;
}
export const ProductImage = ({ img, className, style }: PropsImage) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }
  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Coffe Mug"
    />
  );
};
