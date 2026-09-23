import { useState } from "react";
import { Send } from "lucide-react";
import { contact, contactTopics } from "../constants";

const fieldClass =
  "mt-2 w-full rounded-xl bg-pale-blue px-4 py-3 ring-1 ring-primary transition placeholder:text-neutral-400 focus:bg-white focus:ring-2 focus:ring-blue-teal focus:outline-none";

const initialTopic = () => {
  const topic = new URLSearchParams(window.location.search).get("topic");
  return contactTopics.some((option) => option.value === topic)
    ? topic
    : "merchant";
};

// There is no form backend yet, so sending composes an email to the HimaPay
// inbox in the visitor's own mail app with every field filled in.
const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const send = (formData) => {
    const field = (name) => String(formData.get(name) ?? "").trim();
    const topic =
      contactTopics.find((option) => option.value === field("topic"))?.label ??
      "General enquiry";
    const details = [
      `Name: ${field("name")}`,
      field("business") && `Business: ${field("business")}`,
      `Email: ${field("email")}`,
      field("phone") && `Phone: ${field("phone")}`,
      `Topic: ${topic}`,
    ].filter(Boolean);
    const body = `${details.join("\n")}\n\n${field("message")}`;
    const subject = `${topic}: ${field("name")}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form
      action={send}
      className="rounded-[28px] bg-white p-6 shadow-3xl ring-1 ring-black/5 sm:p-10"
    >
      <h2 className="text-2xl font-bold">Send us a message</h2>
      <p className="mt-2 text-slate-gray">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-semibold">
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="business" className="font-semibold">
            Business name
          </label>
          <input
            id="business"
            name="business"
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="font-semibold">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="font-semibold">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+254"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="topic" className="font-semibold">
            What can we help with?
          </label>
          <select
            id="topic"
            name="topic"
            defaultValue={initialTopic()}
            className={`${fieldClass} bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%236d6d6d%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] appearance-none bg-size-[20px] bg-position-[right_1rem_center] bg-no-repeat pr-12`}
          >
            {contactTopics.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="font-semibold">
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us a little about your business and what you need."
            className={`${fieldClass} resize-y`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-pink-ish px-7 py-4 font-semibold text-white shadow-lg shadow-pink-ish/30 focus-ring transition hover:bg-pink-ish-500 sm:w-auto"
      >
        Send message
        <Send aria-hidden="true" className="size-4" />
      </button>
      <p role="status" className="mt-4 min-h-6 text-sm text-slate-gray">
        {sent
          ? "Your email app should open with your message ready. Just hit send."
          : "Sending opens your email app with your message ready to go."}
      </p>
    </form>
  );
};

export default ContactForm;
