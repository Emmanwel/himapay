import { ArrowRight } from "lucide-react";
import { Backdrop, Button, SplitPreview, StoreBadges } from "../components";
import { merchantCta } from "../constants";

const Hero = () => (
  <section
    id="home"
    aria-labelledby="hero-title"
    className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24"
  >
    <Backdrop />

    <div className="max-container grid items-center gap-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
      <div className="text-center lg:text-left">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-neutral-200 backdrop-blur">
          <span className="size-2 rounded-full bg-pink-ish" />
          Simple · Convenient · Secure
        </p>

        <h1
          id="hero-title"
          className="mt-6 text-[2.75rem] leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl xl:text-7xl"
        >
          <span className="text-blue-teal">Be intentional about</span>{" "}
          <span className="text-pink-ish">your finances</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-slate-gray sm:text-xl lg:mx-0">
          HimaPay helps retail merchants manage their sales revenue by
          separating funds right at the point of sale. Don&apos;t put money
          meant for restocking, loan repayment or profit all in one basket.{" "}
          <strong className="font-extrabold text-pink-ish uppercase">
            Be smart.
          </strong>
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <Button
            href={merchantCta.href}
            icon={ArrowRight}
            className="max-sm:w-full"
          >
            {merchantCta.label}
          </Button>
          <Button
            href="/merchants/#calculator"
            variant="secondary"
            className="max-sm:w-full"
          >
            Try the split calculator
          </Button>
        </div>

        <div className="mt-12 border-t border-neutral-200/80 pt-8">
          <p className="text-sm font-semibold">Register as an individual</p>
          <StoreBadges className="mt-4 justify-center lg:justify-start" />
        </div>
      </div>

      <SplitPreview />
    </div>
  </section>
);

export default Hero;
