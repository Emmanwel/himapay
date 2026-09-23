import { products, services } from "../constants";

const words = [
  "Simple",
  "Convenient",
  "Secure",
  ...services.map((service) => service.label),
  ...products.map((product) => product.label),
];

// Endless ticker of everything HimaPay does. The list is rendered twice so
// the loop is seamless; the copy is hidden from assistive tech.
const Marquee = () => (
  <div className="overflow-hidden border-y border-neutral-200 bg-white py-6">
    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1 ? "true" : undefined}
          className="flex shrink-0 items-center"
        >
          {words.map((word, index) => (
            <li
              key={word}
              className="flex items-center text-xl font-bold whitespace-nowrap sm:text-2xl"
            >
              <span className={index % 2 ? "text-pink-ish" : "text-blue-teal"}>
                {word}
              </span>
              <span
                aria-hidden="true"
                className="mx-8 size-2 rounded-full bg-neutral-300"
              />
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default Marquee;
