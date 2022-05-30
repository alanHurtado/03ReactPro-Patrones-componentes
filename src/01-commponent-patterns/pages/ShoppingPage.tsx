import {
  ProducCard,
  ProductBottons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { Product } from '../interfaces/interfaces';
import { useState } from "react";

const product = {
  id: "1",
  title: "Coffe Mug - card",
  img: "./coffee-mug.png",
};
const product2 = {
  id: "2",
  title: "Coffe Mug 2- card",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({});

  const onProductCountChange = ({count, product}: {count:number, product: Product}) => {
    setShoppingCart(oldShopingCart =>{

      if(count=== 0){
        const {[product.id]: toDelete, ...rest }= oldShopingCart;
        return{
          ...rest
        }
      }
      return{
        ...oldShopingCart,
        [product.id]: {...product, count}
      }
    })
  };

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProducCard product={product} className="bg-dark text-white"
          onChange={ onProductCountChange }>
            <ProducCard.Image img={product.img} className="custom-image" />
            <ProducCard.Title />
            <ProducCard.Bottons className="custom-buttons" />
          </ProducCard>
        ))}
      </div>
      <div className="shopping-cart">
        <ProducCard
          product={product}
          className="bg-dark text-white"
          style={{ width: "100px" }}
          // onChange={()=>onProductCountChange()}
        >
          <ProducCard.Image img={product.img} className="custom-image" />
          <ProducCard.Bottons className="custom-buttons" />
        </ProducCard>
      </div>
      <div>
        <code>
          <pre>
            {
              JSON.stringify( shoppingCart, null,  5 )
            }
          </pre>
        </code>
      </div>
    </div>
  );
};
