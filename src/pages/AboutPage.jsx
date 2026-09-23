import {
  BusFront,
  CodeXml,
  House,
  ShoppingCart,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import {
  CtaBanner,
  Layout,
  PageHero,
  Reveal,
  SectionHeading,
} from "../components";
import { pillars } from "../constants";

const audiences = [
  {
    icon: Store,
    label: "Retail merchants",
    text: "Separate revenue at the point of sale.",
    href: "/merchants/",
  },
  {
    icon: ShoppingCart,
    label: "Supermarkets & shoppers",
    text: "Scan, pay and walk out.",
    href: "/products/#self-checkout",
  },
  {
    icon: UtensilsCrossed,
    label: "Restaurants",
    text: "Faster service, happier staff.",
    href: "/products/#restaurant-optimization",
  },
  {
    icon: BusFront,
    label: "Commuters",
    text: "Know your stage and your fare.",
    href: "/products/#fare-payment",
  },
  {
    icon: House,
    label: "Households",
    text: "Buy tokens from anywhere.",
    href: "/products/#token-buying",
  },
  {
    icon: CodeXml,
    label: "Developers & clients",
    text: "Fair, protected project payments.",
    href: "/products/#project-escrow",
  },
];

const AboutPage = () => (
  <Layout>
    <PageHero
      eyebrow="About HimaPay"
      title={
        <>
          <span className="text-blue-teal">
            Helping businesses be intentional about
          </span>{" "}
          <span className="text-pink-ish">every shilling</span>
        </>
      }
      description="HimaPay Limited builds simple, convenient and secure payment solutions that help merchants, their customers and developers keep money where it belongs."
    />

    <section aria-labelledby="story-title" className="py-20 sm:py-28">
      <div className="max-container grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="text-sm font-bold tracking-widest text-pink-ish-600 uppercase">
            Our story
          </p>
          <h2
            id="story-title"
            className="mt-3 text-3xl leading-tight font-bold tracking-tight text-balance sm:text-5xl"
          >
            Money meant for restocking, loans and profit{" "}
            <span className="text-pink-ish">
              shouldn&apos;t live in one basket.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={150} className="space-y-6 info-text lg:pt-10">
          <p>
            For many retail merchants, every shilling from a sale lands in the
            same place. Money meant for restocking gets spent, loan repayments
            sneak up, and profit becomes a guess.
          </p>
          <p>
            HimaPay was built to change that. By separating funds right at the
            point of sale, we help businesses see exactly what they have for
            each purpose and grow with intention.
          </p>
          <p>
            Today our platform spans payment aggregation, wallets, value-added
            solutions and the MIZIZI API, powering products for retail,
            supermarkets, restaurants, transport, utilities and software
            projects.
          </p>
        </Reveal>
      </div>
    </section>

    <section
      aria-labelledby="values-title"
      className="bg-black py-20 text-white sm:py-28"
    >
      <div className="max-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-widest text-pink-ish uppercase">
            What we stand for
          </p>
          <h2
            id="values-title"
            className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl"
          >
            <span className="text-blue-teal">Simple</span> ·{" "}
            <span className="text-pink-ish">Convenient</span> ·{" "}
            <span className="text-blue-teal">Secure</span>
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.label}
              delay={index * 120}
              className="group relative overflow-hidden rounded-[24px] bg-white/5 p-8 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <span
                aria-hidden="true"
                className="absolute -top-6 -right-2 text-[7rem] leading-none font-extrabold text-white/5"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`inline-flex size-14 items-center justify-center rounded-full text-white ${
                  index === 1 ? "bg-pink-ish" : "bg-blue-teal"
                }`}
              >
                <pillar.icon aria-hidden="true" className="size-7" />
              </span>
              <h3 className="mt-6 text-2xl font-bold">{pillar.label}</h3>
              <p className="mt-3 leading-relaxed text-white-400">
                {pillar.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section aria-labelledby="audiences-title" className="py-20 sm:py-28">
      <div className="max-container">
        <SectionHeading
          id="audiences-title"
          eyebrow="Who we serve"
          title={
            <>
              From the counter to{" "}
              <span className="text-pink-ish">the code</span>
            </>
          }
          description="HimaPay reaches people across everyday commerce."
        />
        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <Reveal as="li" key={audience.label} delay={(index % 3) * 100}>
              <a
                href={audience.href}
                className="group flex h-full items-center gap-5 rounded-[20px] bg-white p-6 shadow-3xl focus-ring transition hover:-translate-y-1"
              >
                <span
                  className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${
                    index % 2
                      ? "bg-pink-ish-50 text-pink-ish-600"
                      : "bg-blue-teal-50 text-blue-teal-800"
                  }`}
                >
                  <audience.icon aria-hidden="true" className="size-7" />
                </span>
                <span>
                  <span className="block text-lg font-bold group-hover:text-pink-ish-600">
                    {audience.label}
                  </span>
                  <span className="text-slate-gray">{audience.text}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>

    <CtaBanner />
  </Layout>
);

export default AboutPage;
