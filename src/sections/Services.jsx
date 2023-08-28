import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <>
      {/*  <section className='max-container flex justify-center flex-wrap gap-9'>*/}
      <section id="products" className="max-container max-sm:mt-5">
        <h3 className="font-palanquin text-center text-4xl font-bold mb-7">
          Our
          <span className="text-coral-red "> Services </span>
        </h3>

        <section className="max-container flex flex-wrap gap-9 justify-center">
          {services.map((service) => (
            <ServiceCard key={service.label} {...service} />
          ))}
        </section>
      </section>
    </>
  );
};

export default Services;
