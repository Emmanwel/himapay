import { ArrowRight } from "lucide-react";

const FeatureCard = ({ icon: Icon, label, subtext, href, color = "pink" }) => (
  <article className="group relative flex h-full flex-col rounded-[20px] bg-white p-8 shadow-3xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgb(0_0_0/0.12)]">
    <div
      className={`inline-flex size-12 items-center justify-center rounded-full text-white ${
        color === "blue" ? "bg-blue-teal" : "bg-pink-ish"
      }`}
    >
      <Icon aria-hidden="true" className="size-6" />
    </div>
    <h3 className="mt-6 text-xl font-bold">{label}</h3>
    <p className="mt-3 leading-relaxed text-slate-gray">{subtext}</p>
    {href && (
      <a
        href={href}
        className="mt-6 inline-flex items-center gap-1.5 self-start rounded font-semibold text-pink-ish-600 focus-ring after:absolute after:inset-0 after:rounded-[20px] hover:text-pink-ish-700"
      >
        Learn more
        <span className="sr-only"> about {label}</span>
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:translate-x-1"
        />
      </a>
    )}
  </article>
);

export default FeatureCard;
