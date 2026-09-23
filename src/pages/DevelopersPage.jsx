import { ArrowRight, Handshake, Layers, Sparkles, Wallet } from "lucide-react";
import {
  ApiDiagram,
  Button,
  CtaBanner,
  FeatureCard,
  Layout,
  PageHero,
  Reveal,
  SectionHeading,
} from "../components";

const capabilities = [
  {
    icon: Layers,
    label: "Payment aggregation",
    subtext:
      "Offer your customers more ways to pay through one integration, so no sale is lost to limited payment options.",
  },
  {
    icon: Wallet,
    label: "Wallets",
    subtext:
      "Bring HimaPay wallets into your product for peer-to-peer and cross-platform transactions.",
  },
  {
    icon: Handshake,
    label: "Escrow",
    subtext:
      "Hold funds until work is delivered, the same model behind our Project Tracking Escrow.",
  },
  {
    icon: Sparkles,
    label: "Value-added services",
    subtext:
      "Tap into HimaPay's wider product offering and share the HimaPay experience with your customers.",
  },
];

const journey = [
  {
    title: "Request access",
    text: "Tell us what you're building and which HimaPay capabilities you need.",
  },
  {
    title: "Build with our team",
    text: "We'll share the MIZIZI API portal and work with you through your integration.",
  },
  {
    title: "Go live",
    text: "Launch to your customers with HimaPay handling payments behind the scenes.",
  },
];

const DevelopersPage = () => (
  <Layout>
    <PageHero
      eyebrow="Developers"
      title={
        <>
          <span className="text-blue-teal">Build with the</span>{" "}
          <span className="text-pink-ish">MIZIZI API</span>
        </>
      }
      description="Mizizi means roots. Our API is the root system beneath HimaPay's products, and it can power yours too."
      actions={
        <Button href="/contact/?topic=api" icon={ArrowRight}>
          Request API access
        </Button>
      }
    />

    <section
      aria-label="How the MIZIZI API connects"
      className="pb-20 sm:pb-28"
    >
      <div className="max-container">
        <Reveal>
          <ApiDiagram />
        </Reveal>
      </div>
    </section>

    <section
      aria-labelledby="capabilities-title"
      className="bg-pale-blue py-20 sm:py-28"
    >
      <div className="max-container">
        <SectionHeading
          id="capabilities-title"
          eyebrow="What you can build"
          title={
            <>
              One API, <span className="text-pink-ish">many possibilities</span>
            </>
          }
          description="Integrate the same capabilities that run HimaPay's own products."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.label} delay={index * 100}>
              <FeatureCard
                {...capability}
                color={index % 2 ? "pink" : "blue"}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section aria-labelledby="journey-title" className="py-20 sm:py-28">
      <div className="max-container">
        <SectionHeading
          id="journey-title"
          eyebrow="Integration journey"
          title={
            <>
              From idea to <span className="text-pink-ish">live</span>
            </>
          }
        />
        <ol className="relative mt-16 grid gap-8 md:grid-cols-3">
          <span
            aria-hidden="true"
            className="absolute top-7 right-[16%] left-[16%] hidden h-0.5 bg-linear-to-r from-blue-teal to-pink-ish md:block"
          />
          {journey.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 120}
              className="relative text-center"
            >
              <span className="relative mx-auto flex size-14 items-center justify-center rounded-full bg-white text-xl font-extrabold text-pink-ish-600 shadow-3xl ring-4 ring-pale-blue">
                {index + 1}
              </span>
              <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs leading-relaxed text-slate-gray">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>

    <CtaBanner
      title="Let's build something together."
      description="Request access to the MIZIZI API and our team will get back to you."
    />
  </Layout>
);

export default DevelopersPage;
