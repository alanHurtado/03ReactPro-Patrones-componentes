import { ProducCard } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";
import { products } from "../data/data";

export const ShoppingPage = () => {
  // if (count === 0) {
  //   const { [product.id]: toDelete, ...rest } = oldShopingCart; //Eliminar objetos en count 0
  //   return {
  //     ...rest,
  //   };
  // }
  // return {
  //   ...oldShopingCart,
  //   [product.id]: { ...product, count },
  // };

  const { shoppingCart, onProductCountChange } = useShoppingCart(products);

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
          <ProducCard
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProducCard.Image img={product.img} className="custom-image" />
            <ProducCard.Title />
            <ProducCard.Bottons className="custom-buttons" />
          </ProducCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProducCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProducCard.Image img={product.img} className="custom-image" />
            <ProducCard.Bottons className="custom-buttons" />
          </ProducCard>
        ))}
      </div>
      {/* <div>
        <code>
          <pre>{JSON.stringify(shoppingCart, null, 5)}</pre>
        </code>
      </div> */}
    </div>
  );
};
