import { ArrowRight } from "lucide-react";
import { Button, Logo, Reveal, SectionHeading } from "../components";
import { pillars } from "../constants";

const WhyHimaPay = () => (
  <section aria-labelledby="why-title" className="bg-pale-blue py-20 sm:py-28">
    <div className="max-container grid items-center gap-16 lg:grid-cols-2">
      <Reveal>
        <SectionHeading
          id="why-title"
          align="left"
          eyebrow="Why HimaPay"
          title={
            <>
              <span className="text-blue-teal">We provide you</span>{" "}
              <span className="text-pink-ish">secure payment</span>{" "}
              <span className="text-blue-teal">solutions</span>
            </>
          }
          description="We're dedicated to premium services and products. Our solutions are meticulously crafted to elevate your experience with unmatched quality, innovation and an insightful developer API."
        />
        <p className="mt-4 max-w-xl info-text">
          Our attention to detail and pursuit of excellence ensure your
          satisfaction.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/about/" icon={ArrowRight}>
            About HimaPay
          </Button>
          <Button href="/developers/" variant="secondary">
            Developer API
          </Button>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="relative isolate overflow-hidden rounded-[32px] bg-black p-8 shadow-3xl sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-pink-ish/35 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 -z-10 size-72 rounded-full bg-blue-teal/35 blur-3xl"
          />
          <Logo className="w-48" />
          <ul className="mt-10 space-y-4">
            {pillars.map((pillar, index) => (
              <li
                key={pillar.label}
                className="flex gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
              >
                <span
                  className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full text-white ${
                    index === 1 ? "bg-pink-ish" : "bg-blue-teal"
                  }`}
                >
                  <pillar.icon aria-hidden="true" className="size-5" />
                </span>
                <span>
                  <span className="block font-semibold text-white">
                    {pillar.label}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-white-400">
                    {pillar.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default WhyHimaPay;
