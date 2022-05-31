import { useState } from 'react';
import { Product } from '../interfaces/interfaces';

interface ProductInCart extends Product {
    count: number;
  }
  

export const useShoppingCart = (product: Product[]) => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart; }>({});
    
      const onProductCountChange = ({count, product, }: {count: number; product: Product; }) => {
        setShoppingCart((oldShopingCart) => {
          const productIncart: ProductInCart = oldShopingCart[product.id] || {
            ...product,
            count: 0,
          };
    
          if (Math.max(productIncart.count + count, 0) > 0) {
            productIncart.count += count;
            return {
              ...oldShopingCart,
              [product.id]: productIncart,
            };
          }
    
          const { [product.id]: toDelete, ...rest } = oldShopingCart; //Eliminar objetos en count 0
          return {
            ...rest,
          };
        });
      };
  return {
      shoppingCart,
      onProductCountChange,
  };
};


