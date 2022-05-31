import { CSSProperties, ReactNode } from "react";
import { PropsImage } from "../components/ProductImage";
import { PropsTitle } from "../components/ProductTitle";
import { PropsBottons } from "../components/ProductBottons";


export interface Props  {
  children: (args: ProductCardHandlers) => ReactNode;
  className?: string;
  style?: CSSProperties;
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
};

export interface InitialValues {
  count?: number;
  maxCount?: number;
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
  value?: number;
  maxCount?: number
}

export interface ProducCardHOCProps {
  ({ product, children }: Props): JSX.Element;
  Title: (Props: PropsTitle) => JSX.Element;
  Image: (Props: PropsImage) => JSX.Element;
  Bottons: (Props: PropsBottons) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}


export interface ProductCardHandlers {
  count: number,
  isMaxCountReached: boolean,
  maxCount?: number,
  product: Product,
  increaseBy: (value: number) => void;
  reset: () =>void,
}