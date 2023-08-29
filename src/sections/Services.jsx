import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <>
      <section id="products" className="max-container max-sm:mt-5">
        <h3 className="font-palanquin text-center text-4xl font-bold mb-7">
          Our
          <span className="text-coral-red "> Services </span>
        </h3>
        <section className="max-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-10 justify-center">
          {services.map((service) => (
            <ServiceCard key={service.label} {...service} />
          ))}
        </section>
      </section>
    </>
  );
};

export default Services;
