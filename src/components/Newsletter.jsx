import { useState } from "react";
import { Send } from "lucide-react";
import { contact } from "../constants";

// No mailing-list backend yet: submitting opens the visitor's email app with
// a pre-filled sign-up request to the HimaPay inbox.
const Newsletter = () => {
  const [requested, setRequested] = useState(false);

  const subscribe = (formData) => {
    const subject = encodeURIComponent("Newsletter sign-up");
    const body = encodeURIComponent(
      `Please add ${formData.get("email")} to the HimaPay updates and newsletter list.`,
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setRequested(true);
  };

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Sign up for <span className="text-pink-ish">updates</span> &amp;
          newsletter
        </h2>
        <p className="mt-2">
          Product news and tips for managing your business finances.
        </p>
      </div>
      <div className="w-full lg:max-w-md">
        <form action={subscribe} className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@business.co.ke"
            className="min-w-0 flex-1 rounded-full bg-white/10 px-5 py-3.5 text-white ring-1 ring-white/20 placeholder:text-white/50 focus:ring-2 focus:ring-blue-teal focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-ish px-7 py-3.5 font-semibold text-white transition hover:bg-pink-ish-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-teal"
          >
            Sign up
            <Send aria-hidden="true" className="size-4" />
          </button>
        </form>
        <p role="status" className="mt-3 min-h-5 text-sm">
          {requested &&
            "Your email app should open with the request ready. Just hit send."}
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
