import {
  ProducCard,
  ProductBottons,
  ProductImage,
  ProductTitle,
} from "../components";
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
        <ProducCard product={product}>
          <ProductImage />
          <ProductTitle  />
          <ProductBottons />
        </ProducCard>

        <ProducCard product={product}>
          <ProducCard.Image img={product.img}/>
          <ProducCard.Title title="hola" />
          <ProducCard.Bottons />
        </ProducCard>
      </div>
    </div>
  );
};
