import {
  ProducCard,
  ProductBottons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffe Mug - card",
  img: "./coffee-mug.png",
};
export const ShoppingPage = () => {
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
        <ProducCard product={product} className="bg-dark text-white">
          <ProducCard.Image img={product.img} className="custom-image" />
          <ProducCard.Title title="hola" />
          <ProducCard.Bottons className="custom-buttons" />
        </ProducCard>

        <ProducCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle />
          <ProductBottons className="custom-buttons" />
        </ProducCard>

        <ProducCard
          product={product}
          style={{
            backgroundColor: "black",
            color: 'white',
          }}
        >
          <ProductImage />
          <ProductTitle />
          <ProductBottons />
        </ProducCard>
      </div>
    </div>
  );
};
