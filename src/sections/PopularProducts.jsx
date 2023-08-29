import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <>
      <section id="products" className="max-container max-sm:mt-12">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          Our
          <span className="text-coral-red"> Products </span>
        </h3>
        <p className="m-auto mt-4 max-w-lg  text-center info-text">
          Here are Our Core Products. Get Exceptional Experiences with Us.
        </p>

        <section className="max-container flex flex-wrap gap-9 justify-center">
          {products.map((product) => (
            <PopularProductCard key={product.label} {...product} />
          ))}
        </section>
      </section>
    </>
  );
};

export default PopularProducts;
