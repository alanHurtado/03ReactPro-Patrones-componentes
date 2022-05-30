import { CSSProperties, ReactNode } from "react";
import { PropsImage } from "../components/ProductImage";
import { PropsTitle } from '../components/ProductTitle';
import { PropsBottons } from '../components/ProductBottons';

export type Props = {
  children: ReactNode;
  className?: string;
  style?:  CSSProperties;
  product: Product;
};

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProducCardHOCProps {
  ({ product, children }: Props): JSX.Element;
  Title: ( Props : PropsTitle) => JSX.Element;
  Image: (Props: PropsImage) => JSX.Element;
  Bottons: (Props: PropsBottons) => JSX.Element;
}
