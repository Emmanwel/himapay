import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <>
      {" "}
      {/*
     <section id="products" className="max-container max-sm:mt-12 ">
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-4xl font-palanquin font-bold">
            Our <span className="text-coral-red">Our </span> Products
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value
          </p>
        </div>
  */}
      <section id="products" className="max-container max-sm:mt-12">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          Our
          <span className="text-coral-red"> Products </span>
        </h3>
        <p className="m-auto mt-4 max-w-lg  text-center info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
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
