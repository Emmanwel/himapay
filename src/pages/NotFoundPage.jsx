import { ArrowLeft } from "lucide-react";
import { Backdrop, Button, Layout } from "../components";
import { navLinks } from "../constants";

const pots = [
  { label: "Restocking", fill: "h-3/5", color: "bg-blue-teal" },
  { label: "Loan", fill: "h-1/4", color: "bg-pink-ish" },
  {
    label: "Profit",
    fill: "h-2/5",
    color: "bg-linear-to-t from-blue-teal to-pink-ish",
  },
];

const NotFoundPage = () => (
  <Layout>
    <section className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44">
      <Backdrop />
      <div className="max-container text-center">
        <div
          aria-hidden="true"
          className="relative mx-auto flex h-48 max-w-sm items-end justify-center gap-5"
        >
          <span className="absolute -top-2 left-1/2 flex size-20 -translate-x-1/2 animate-float items-center justify-center rounded-full bg-linear-to-br from-blue-teal to-pink-ish text-2xl font-extrabold text-white shadow-xl ring-4 ring-white">
            404
          </span>
          {pots.map((pot) => (
            <div key={pot.label} className="flex flex-col items-center gap-2">
              <div className="relative flex h-28 w-20 items-end overflow-hidden rounded-t-lg rounded-b-3xl border-4 border-neutral-900 bg-white">
                <div className={`w-full ${pot.fill} ${pot.color}`} />
              </div>
              <span className="text-xs font-semibold text-slate-gray">
                {pot.label}
              </span>
            </div>
          ))}
        </div>

        <h1 className="mt-12 text-4xl font-extrabold tracking-tight sm:text-6xl">
          <span className="text-blue-teal">This page fell out</span>{" "}
          <span className="text-pink-ish">of the basket</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl info-text">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/" leadingIcon={ArrowLeft}>
            Back to home
          </Button>
        </div>
        <nav aria-label="Popular pages" className="mt-10">
          <ul className="flex flex-wrap justify-center gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-neutral-200 focus-ring hover:text-pink-ish-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
