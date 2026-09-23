import { Plus } from "lucide-react";
import { faqs } from "../constants";

const Faq = () => (
  <div className="divide-y divide-neutral-200 rounded-[20px] bg-white shadow-3xl">
    {faqs.map((faq) => (
      <details
        key={faq.question}
        name="faq"
        className="group px-6 py-2 sm:px-8"
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-4 text-lg font-semibold focus-ring [&::-webkit-details-marker]:hidden">
          {faq.question}
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-pink-ish-50 text-pink-ish-600 transition-transform duration-300 group-open:rotate-45">
            <Plus aria-hidden="true" className="size-5" />
          </span>
        </summary>
        <p className="pb-5 leading-relaxed text-slate-gray">{faq.answer}</p>
      </details>
    ))}
  </div>
);

export default Faq;
