import { ProducCard } from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/data";

export const ShoppingPage = () => {
  const product = products[0];
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProducCard
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({reset, count, maxCount, isMaxCountReached, increaseBy, product}) => (
          <>
            <ProducCard.Image img={product.img} className="custom-image" />
            <ProducCard.Title />
            <ProducCard.Bottons className="custom-buttons" />

            <button onClick={reset}> Reset </button>
            <button onClick={()=>increaseBy(-2)}> -2 </button>          

            <button disabled={isMaxCountReached} onClick={()=>increaseBy(+2)}> +2 </button>
            
            <span> {count} </span>
          </>
        )}
      </ProducCard>
    </div>
  );
};
