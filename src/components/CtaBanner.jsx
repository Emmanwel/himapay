import { Mail, Phone } from "lucide-react";
import { contact } from "../constants";
import Button from "./Button";
import Reveal from "./Reveal";

const CtaBanner = ({
  title = "Let's collaborate on your next solution.",
  description = "Tell us about your business and we'll help you find the right HimaPay product.",
}) => (
  <section aria-labelledby="cta-title" className="py-20 sm:py-28">
    <div className="max-container">
      <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-blue-teal px-6 py-14 sm:px-14 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute -top-28 -left-28 -z-10 size-80 rounded-full border-[36px] border-white/15"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 -bottom-44 -z-10 size-112 rounded-full bg-pink-ish/45 blur-3xl"
        />
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl lg:flex-1">
            <h2
              id="cta-title"
              className="text-3xl font-bold tracking-tight text-balance text-neutral-950 sm:text-5xl"
            >
              {title}
            </h2>
            <p className="mt-4 text-lg text-pretty text-neutral-900/80">
              {description}
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
            <Button href={`tel:${contact.phone}`} leadingIcon={Phone}>
              Call {contact.phoneDisplay}
            </Button>
            <Button
              href={`mailto:${contact.email}`}
              variant="light"
              leadingIcon={Mail}
            >
              {contact.email}
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CtaBanner;
