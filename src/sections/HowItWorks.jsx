import { ArrowRight } from "lucide-react";
import { Reveal, SectionHeading } from "../components";
import { steps } from "../constants";

const HowItWorks = () => (
  <section
    id="how-it-works"
    aria-labelledby="how-title"
    className="py-20 sm:py-28"
  >
    <div className="max-container">
      <SectionHeading
        id="how-title"
        eyebrow="How it works"
        title={
          <>
            One sale. <span className="text-pink-ish">Three clear pots.</span>
          </>
        }
        description="Don't put everything in one basket. HimaPay separates your revenue from the moment you get paid."
      />

      <ol className="mt-16 grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <Reveal
            as="li"
            key={step.title}
            delay={index * 120}
            className="relative rounded-[20px] bg-pale-blue p-8"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-blue-teal text-white">
                <step.icon aria-hidden="true" className="size-6" />
              </span>
              <span className="text-5xl font-extrabold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-slate-gray">{step.text}</p>
          </Reveal>
        ))}
      </ol>

      <p className="mt-10 text-center">
        <a
          href="/merchants/#calculator"
          className="group inline-flex items-center gap-2 rounded font-semibold text-pink-ish-600 focus-ring hover:text-pink-ish-700"
        >
          See what your split looks like
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-1"
          />
        </a>
      </p>
    </div>
  </section>
);

export default HowItWorks;
