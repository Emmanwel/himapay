import { ArrowRight, Check } from "lucide-react";
import {
  CtaBanner,
  Layout,
  PageHero,
  ProductVisual,
  Reveal,
} from "../components";
import { products } from "../constants";
import useActiveSection from "../hooks/useActiveSection";

const productIds = products.map((product) => product.slug);

const ProductNav = () => {
  const active = useActiveSection(productIds);
  return (
    <nav
      aria-label="Products"
      className="sticky top-18 z-40 border-y border-neutral-200 bg-white/90 backdrop-blur-lg"
    >
      <ul className="max-container flex [scrollbar-width:none] gap-2 overflow-x-auto py-3">
        {products.map((product) => {
          const isActive = active === product.slug;
          return (
            <li key={product.slug} className="shrink-0">
              <a
                href={`#${product.slug}`}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap focus-ring transition ${
                  isActive
                    ? "bg-pink-ish text-white"
                    : "bg-pale-blue text-neutral-700 hover:bg-primary"
                }`}
              >
                <product.icon aria-hidden="true" className="size-4" />
                {product.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const ProductSection = ({ product, index }) => {
  const flipped = index % 2 === 1;
  return (
    <section
      id={product.slug}
      aria-labelledby={`${product.slug}-title`}
      className="scroll-mt-12 py-16 sm:py-24"
    >
      <div className="max-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={flipped ? "lg:order-2" : ""}>
          <div className="flex items-center gap-4">
            <span
              className={`inline-flex size-12 items-center justify-center rounded-full text-white ${
                index % 2 ? "bg-blue-teal" : "bg-pink-ish"
              }`}
            >
              <product.icon aria-hidden="true" className="size-6" />
            </span>
            <span className="text-sm font-bold tracking-widest text-neutral-400">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(products.length).padStart(2, "0")}
            </span>
          </div>
          <h2
            id={`${product.slug}-title`}
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {product.label}
          </h2>
          <p className="mt-3 text-xl font-semibold text-pink-ish-600">
            {product.tagline}
          </p>
          <p className="mt-5 info-text">{product.subtext}</p>

          <ul className="mt-8 space-y-3">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-teal-50 text-blue-teal-800">
                  <Check aria-hidden="true" className="size-4" />
                </span>
                <span className="font-medium">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-sm font-semibold text-slate-gray">
              Made for
            </span>
            {product.audience.map((group) => (
              <span
                key={group}
                className="rounded-full bg-pale-blue px-3 py-1 text-sm font-medium ring-1 ring-primary"
              >
                {group}
              </span>
            ))}
          </div>

          <a
            href="/contact/?topic=products"
            className="group mt-10 inline-flex items-center gap-2 rounded font-semibold text-pink-ish-600 focus-ring hover:text-pink-ish-700"
          >
            Talk to our team
            <span className="sr-only"> about {product.label}</span>
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </a>
        </Reveal>

        <Reveal delay={150} className={flipped ? "lg:order-1" : ""}>
          <ProductVisual slug={product.slug} label={product.label} />
        </Reveal>
      </div>
    </section>
  );
};

const ProductsPage = () => (
  <Layout>
    <PageHero
      eyebrow="Our products"
      title={
        <>
          <span className="text-blue-teal">Solutions for every corner</span>{" "}
          <span className="text-pink-ish">of commerce</span>
        </>
      }
      description="Six products built on HimaPay's payment platform, serving shops, supermarkets, restaurants, commuters, households and software teams."
    />
    <ProductNav />
    {products.map((product, index) => (
      <ProductSection key={product.slug} product={product} index={index} />
    ))}
    <CtaBanner
      title="Found the right fit?"
      description="Tell us which product you're interested in and we'll walk you through it."
    />
  </Layout>
);

export default ProductsPage;
