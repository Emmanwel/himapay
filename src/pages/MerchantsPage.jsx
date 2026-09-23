import {
  ArrowRight,
  CalendarClock,
  ChartNoAxesCombined,
  CircleHelp,
  Layers,
  LayoutDashboard,
  PackageX,
  ShieldCheck,
} from "lucide-react";
import {
  Button,
  CtaBanner,
  FeatureCard,
  Layout,
  PageHero,
  Reveal,
  SectionHeading,
  SplitCalculator,
  SplitPreview,
} from "../components";
import { merchantCta } from "../constants";

const problems = [
  {
    icon: PackageX,
    title: "Restock money gets spent",
    text: "When the shelves run low, the cash meant for new stock has already gone on something else.",
  },
  {
    icon: CalendarClock,
    title: "Loan repayments sneak up",
    text: "Repayment day arrives and the money is scattered across a week of sales.",
  },
  {
    icon: CircleHelp,
    title: "Profit becomes a guess",
    text: "With everything in one basket, it's hard to know what your business actually earned.",
  },
];

const features = [
  {
    icon: LayoutDashboard,
    label: "Merchant dashboard",
    subtext:
      "Register your business and follow your sales and pots from one place.",
  },
  {
    icon: Layers,
    label: "More ways to get paid",
    subtext:
      "Payment aggregation means you don't lose sales because a customer's preferred option isn't available.",
  },
  {
    icon: ChartNoAxesCombined,
    label: "Real-time insight",
    subtext:
      "See how your products perform as it happens, so you can restock the right things at the right time.",
  },
  {
    icon: ShieldCheck,
    label: "Secure by design",
    subtext:
      "Your revenue is handled securely, efficiently and on time, every single sale.",
  },
];

const onboarding = [
  {
    title: "Register your business",
    text: "Get in touch and our team will set up your merchant account.",
  },
  {
    title: "Choose your pots",
    text: "Decide how each sale is shared between restocking, loan repayment and profit.",
  },
  {
    title: "Sell as usual",
    text: "Every payment is separated at the point of sale. You just watch the pots grow.",
  },
];

const MerchantsPage = () => (
  <Layout>
    <PageHero
      eyebrow="For merchants"
      title={
        <>
          <span className="text-blue-teal">Every shilling</span>{" "}
          <span className="text-pink-ish">in the right pot</span>
        </>
      }
      description="HimaPay separates your sales revenue right at the point of sale, so money for restocking, loan repayment and profit never ends up in one basket."
      actions={
        <>
          <Button href={merchantCta.href} icon={ArrowRight}>
            {merchantCta.label}
          </Button>
          <Button href="#calculator" variant="secondary">
            Try the calculator
          </Button>
        </>
      }
      visual={<SplitPreview />}
    />

    <section aria-labelledby="problem-title" className="py-20 sm:py-28">
      <div className="max-container">
        <SectionHeading
          id="problem-title"
          eyebrow="The problem"
          title={
            <>
              One basket is a{" "}
              <span className="text-pink-ish">risky basket</span>
            </>
          }
          description="Most small businesses run every shilling through a single pocket or account. That's where the trouble starts."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {problems.map((problem, index) => (
            <Reveal
              key={problem.title}
              delay={index * 120}
              className="rounded-[20px] border border-dashed border-pink-ish-300 bg-pink-ish-50/60 p-8"
            >
              <problem.icon
                aria-hidden="true"
                className="size-8 text-pink-ish-600"
              />
              <h3 className="mt-5 text-xl font-bold">{problem.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-gray">
                {problem.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section
      id="calculator"
      aria-labelledby="calculator-title"
      className="bg-pale-blue py-20 sm:py-28"
    >
      <div className="max-container">
        <SectionHeading
          id="calculator-title"
          eyebrow="Split calculator"
          title={
            <>
              See where your <span className="text-pink-ish">money goes</span>
            </>
          }
          description="Enter your average daily sales and choose your split. We'll show you what lands in each pot every day, week and month."
        />
        <Reveal className="mt-16">
          <SplitCalculator />
        </Reveal>
      </div>
    </section>

    <section aria-labelledby="features-title" className="py-20 sm:py-28">
      <div className="max-container">
        <SectionHeading
          id="features-title"
          eyebrow="Built for the way you sell"
          title={
            <>
              Everything your <span className="text-pink-ish">counter</span>{" "}
              needs
            </>
          }
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.label} delay={index * 100}>
              <FeatureCard {...feature} color={index % 2 ? "pink" : "blue"} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section aria-labelledby="onboarding-title" className="pb-8">
      <div className="max-container">
        <div className="rounded-[32px] bg-black px-6 py-16 text-white sm:px-14">
          <h2
            id="onboarding-title"
            className="text-center text-3xl font-bold sm:text-4xl"
          >
            Get started in <span className="text-pink-ish">three steps</span>
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {onboarding.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 120}
                className="relative text-center"
              >
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-linear-to-br from-blue-teal to-pink-ish text-xl font-extrabold">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs leading-relaxed text-white-400">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Ready to be intentional about your finances?"
      description="Talk to our team and we'll get your business set up with HimaPay."
    />
  </Layout>
);

export default MerchantsPage;
