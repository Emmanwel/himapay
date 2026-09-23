import { CircleCheck, ShieldCheck, Split } from "lucide-react";

// Illustrative figures only: shows how one sale is separated at the till.
const sale = 12500;
const pots = [
  { label: "Restocking", share: 60, bar: "bg-blue-teal" },
  { label: "Loan repayment", share: 25, bar: "bg-pink-ish" },
  {
    label: "Profit",
    share: 15,
    bar: "bg-linear-to-r from-blue-teal to-pink-ish",
  },
];

const formatKes = (amount) => `KES ${amount.toLocaleString("en-KE")}`;

const SplitPreview = () => (
  <div
    role="img"
    aria-label="Illustration: a KES 12,500 sale is automatically split into restocking, loan repayment and profit"
    className="relative mx-auto w-full max-w-md"
  >
    <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-linear-to-br from-blue-teal/30 to-pink-ish/30 blur-2xl" />

    <div className="rounded-3xl bg-white p-6 shadow-2xl ring-1 shadow-black/10 ring-neutral-200 sm:p-8">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-neutral-500">Sale received</p>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
          <CircleCheck aria-hidden="true" className="size-3.5" />
          Paid
        </span>
      </div>
      <p className="mt-1 text-4xl font-bold tracking-tight text-neutral-900">
        {formatKes(sale)}
      </p>
      <p className="mt-1 text-sm text-neutral-500">Till payment · just now</p>

      <div className="my-6 flex items-center gap-2 text-sm font-semibold text-blue-teal-800">
        <Split aria-hidden="true" className="size-4" />
        Split at the point of sale
        <span className="h-px flex-1 bg-neutral-200" />
      </div>

      <ul className="space-y-5">
        {pots.map((pot) => (
          <li key={pot.label}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="font-medium text-neutral-700">{pot.label}</span>
              <span className="font-semibold text-neutral-900">
                {formatKes((sale * pot.share) / 100)}
              </span>
            </div>
            <div className="mt-2 h-2.5 rounded-full bg-neutral-100">
              <div
                className={`h-full rounded-full ${pot.bar}`}
                style={{ width: `${pot.share}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>

    <div className="absolute -top-5 -right-8 hidden animate-float items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-800 shadow-xl ring-1 ring-neutral-200 sm:flex">
      <ShieldCheck aria-hidden="true" className="size-5 text-blue-teal-700" />
      Secure
    </div>
    <div className="absolute -bottom-10 -left-10 hidden animate-float items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-neutral-200 [animation-delay:-3s] sm:flex">
      <span className="flex size-9 items-center justify-center rounded-full bg-pink-ish-50 text-sm font-bold text-pink-ish-600">
        15%
      </span>
      <span className="text-sm leading-tight">
        <span className="block font-semibold text-neutral-800">
          Profit kept aside
        </span>
        <span className="text-neutral-500">Automatically</span>
      </span>
    </div>
  </div>
);

export default SplitPreview;
