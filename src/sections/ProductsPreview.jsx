import { FeatureCard, Reveal, SectionHeading } from "../components";
import { products } from "../constants";

const ProductsPreview = () => (
  <section
    id="products"
    aria-labelledby="products-title"
    className="py-20 sm:py-28"
  >
    <div className="max-container">
      <SectionHeading
        id="products-title"
        eyebrow="Built on HimaPay"
        title={
          <>
            Our <span className="text-pink-ish">Products</span>
          </>
        }
        description="Here are our core products. Get exceptional experiences with us, from the shop counter to the bus stage."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.slug} delay={(index % 3) * 100}>
            <FeatureCard
              icon={product.icon}
              label={product.label}
              subtext={product.tagline}
              href={`/products/#${product.slug}`}
              color={index % 2 ? "blue" : "pink"}
            />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsPreview;
