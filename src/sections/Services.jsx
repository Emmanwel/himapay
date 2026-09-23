import { FeatureCard, Reveal, SectionHeading } from "../components";
import { services } from "../constants";

const Services = () => (
  <section
    id="services"
    aria-labelledby="services-title"
    className="bg-pale-blue py-20 sm:py-28"
  >
    <div className="max-container">
      <SectionHeading
        id="services-title"
        eyebrow="What we do"
        title={
          <>
            Our <span className="text-pink-ish">Services</span>
          </>
        }
        description="From collecting payments to building on our API, HimaPay gives your business the tools to transact with confidence."
      />

      <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <Reveal key={service.label} delay={index * 100}>
            <FeatureCard {...service} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
