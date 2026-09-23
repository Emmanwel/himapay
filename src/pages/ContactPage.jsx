import { Mail, Phone } from "lucide-react";
import {
  ContactForm,
  Faq,
  Layout,
  PageHero,
  Reveal,
  SectionHeading,
} from "../components";
import { contact, socialLinks } from "../constants";

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: contact.phoneDisplay,
    href: `tel:${contact.phone}`,
  },
  {
    icon: Mail,
    label: "Email us",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
];

const ContactPage = () => (
  <Layout>
    <PageHero
      eyebrow="Contact"
      title={
        <>
          <span className="text-blue-teal">Let&apos;s talk about</span>{" "}
          <span className="text-pink-ish">your business</span>
        </>
      }
      description="Whether you want to register your business, explore a product or build on our API, we'd love to hear from you."
    />

    <section aria-label="Contact details and form" className="pb-20 sm:pb-28">
      <div className="max-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="space-y-4">
          {channels.map((channel, index) => (
            <a
              key={channel.label}
              href={channel.href}
              className="group flex items-center gap-5 rounded-[20px] bg-white p-6 shadow-3xl focus-ring transition hover:-translate-y-1"
            >
              <span
                className={`flex size-14 shrink-0 items-center justify-center rounded-full text-white ${
                  index ? "bg-pink-ish" : "bg-blue-teal"
                }`}
              >
                <channel.icon aria-hidden="true" className="size-6" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-slate-gray">
                  {channel.label}
                </span>
                <span className="block truncate text-lg font-bold group-hover:text-pink-ish-600">
                  {channel.value}
                </span>
              </span>
            </a>
          ))}

          <div className="rounded-[20px] bg-black p-6 text-white">
            <p className="font-semibold">Follow HimaPay</p>
            <p className="mt-1 text-sm text-white-400">
              News and updates from the team.
            </p>
            <ul className="mt-5 flex gap-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black focus-ring transition hover:bg-pink-ish hover:text-white"
                  >
                    <social.icon className="size-4" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ContactForm />
        </Reveal>
      </div>
    </section>

    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="bg-pale-blue py-20 sm:py-28"
    >
      <div className="max-container">
        <SectionHeading
          id="faqs-title"
          eyebrow="FAQs"
          title={
            <>
              Questions, <span className="text-pink-ish">answered</span>
            </>
          }
        />
        <div className="mx-auto mt-14 max-w-3xl">
          <Faq />
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
