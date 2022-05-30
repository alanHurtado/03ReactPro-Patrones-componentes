import { ReactNode } from "react";
export type Props = {
  children: ReactNode;
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
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Bottons: () => JSX.Element;
}
