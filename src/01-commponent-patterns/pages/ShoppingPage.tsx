import { ProducCard } from "../components/ProducCard";
const product = {
  id: "1",
  title: "Coffe Mug - card",
  img: './coffee-mug.png'
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
        <ProducCard {...product} />
      </div>
    </div>
  );
};
