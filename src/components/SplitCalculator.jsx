import { useState } from "react";

const periods = [
  { value: "day", label: "Daily", noun: "day", perDay: () => 1 },
  { value: "week", label: "Weekly", noun: "week", perDay: (days) => days },
  {
    value: "month",
    label: "Monthly",
    noun: "month",
    perDay: (days) => (days * 52) / 12,
  },
];

const formatKes = (amount) =>
  `KES ${Math.round(amount).toLocaleString("en-KE")}`;

const Slider = ({ id, label, value, onChange, color, hint }) => (
  <div>
    <div className="flex items-baseline justify-between">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <span className="text-lg font-bold tabular-nums">{value}%</span>
    </div>
    <input
      id={id}
      type="range"
      min={0}
      max={100}
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
      className="mt-4 range"
      style={{ "--range-fill": `${value}%`, "--range-color": color }}
    />
    {hint && <p className="mt-1 text-sm text-slate-gray">{hint}</p>}
  </div>
);

const SplitCalculator = () => {
  const [salesInput, setSalesInput] = useState("10000");
  const [days, setDays] = useState(6);
  const [restock, setRestock] = useState(60);
  const [loan, setLoan] = useState(25);
  const [periodValue, setPeriodValue] = useState("month");

  const sales = Math.max(0, Number(salesInput) || 0);
  const sliderSales = Math.min(Math.max(sales, 500), 200000);
  const profit = 100 - restock - loan;
  const period = periods.find((p) => p.value === periodValue);
  const total = sales * period.perDay(days);

  // Keep the three pots adding up to 100%.
  const updateRestock = (value) => {
    setRestock(value);
    if (value + loan > 100) setLoan(100 - value);
  };
  const updateLoan = (value) => {
    setLoan(value);
    if (restock + value > 100) setRestock(100 - value);
  };

  const pots = [
    { label: "Restocking", share: restock, bar: "bg-blue-teal" },
    { label: "Loan repayment", share: loan, bar: "bg-pink-ish" },
    {
      label: "Profit",
      share: profit,
      bar: "bg-linear-to-r from-blue-teal to-pink-ish",
    },
  ];

  return (
    <div className="grid overflow-hidden rounded-[28px] bg-white shadow-3xl ring-1 ring-black/5 lg:grid-cols-[1.1fr_1fr]">
      <form
        className="space-y-8 p-6 sm:p-10"
        onSubmit={(event) => event.preventDefault()}
      >
        <div>
          <label htmlFor="daily-sales" className="font-semibold">
            Average daily sales
          </label>
          <div className="mt-3 flex items-center rounded-2xl bg-pale-blue ring-1 ring-primary focus-within:ring-2 focus-within:ring-blue-teal">
            <span className="pl-5 font-semibold text-slate-gray">KES</span>
            <input
              id="daily-sales"
              type="number"
              inputMode="numeric"
              min={0}
              step={100}
              value={salesInput}
              onChange={(event) => setSalesInput(event.target.value)}
              className="w-full bg-transparent px-3 py-4 text-2xl font-bold tabular-nums outline-none"
            />
          </div>
          <input
            type="range"
            aria-label="Average daily sales slider"
            min={500}
            max={200000}
            step={500}
            value={sliderSales}
            onChange={(event) => setSalesInput(event.target.value)}
            className="mt-5 range"
            style={{
              "--range-fill": `${(sliderSales - 500) / 1995}%`,
              "--range-color": "var(--color-pink-ish)",
            }}
          />
        </div>

        <fieldset>
          <legend className="font-semibold">Days open per week</legend>
          <div className="mt-3 grid grid-cols-7 gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((count) => (
              <label key={count} className="relative">
                <input
                  type="radio"
                  name="days"
                  value={count}
                  checked={days === count}
                  onChange={() => setDays(count)}
                  className="peer sr-only"
                />
                <span className="flex h-11 cursor-pointer items-center justify-center rounded-xl bg-pale-blue font-semibold ring-1 ring-primary transition peer-checked:bg-pink-ish peer-checked:text-white peer-checked:ring-pink-ish peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-blue-teal-700 hover:ring-pink-ish-300">
                  {count}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="space-y-6">
          <Slider
            id="restock-share"
            label="Restocking"
            value={restock}
            onChange={updateRestock}
            color="var(--color-blue-teal)"
          />
          <Slider
            id="loan-share"
            label="Loan repayment"
            value={loan}
            onChange={updateLoan}
            color="var(--color-pink-ish)"
          />
          <div className="flex items-baseline justify-between rounded-2xl bg-pale-blue px-5 py-4">
            <span className="font-semibold">
              Profit{" "}
              <span className="font-normal text-slate-gray">
                (what&apos;s left)
              </span>
            </span>
            <span className="text-lg font-bold tabular-nums">{profit}%</span>
          </div>
        </div>
      </form>

      <div className="relative isolate flex flex-col overflow-hidden bg-black p-6 text-white sm:p-10">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 -z-10 size-72 rounded-full bg-pink-ish/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-24 -z-10 size-72 rounded-full bg-blue-teal/30 blur-3xl"
        />

        <fieldset>
          <legend className="sr-only">Time period</legend>
          <div className="grid grid-cols-3 gap-1 rounded-full bg-white/10 p-1">
            {periods.map((option) => (
              <label key={option.value}>
                <input
                  type="radio"
                  name="period"
                  value={option.value}
                  checked={periodValue === option.value}
                  onChange={() => setPeriodValue(option.value)}
                  className="peer sr-only"
                />
                <span className="block cursor-pointer rounded-full py-2 text-center text-sm font-semibold text-white/70 transition peer-checked:bg-white peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-blue-teal hover:text-white peer-checked:hover:text-black">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <p className="mt-8 text-sm font-medium text-white-400">
          Sales per {period.noun}
        </p>
        <p className="mt-1 text-4xl font-extrabold tracking-tight tabular-nums sm:text-5xl">
          {formatKes(total)}
        </p>

        <div
          aria-hidden="true"
          className="mt-6 flex h-4 overflow-hidden rounded-full bg-white/10"
        >
          {pots.map((pot) => (
            <div
              key={pot.label}
              className={`h-full transition-all duration-500 ${pot.bar}`}
              style={{ width: `${pot.share}%` }}
            />
          ))}
        </div>

        <ul className="mt-8 space-y-4">
          {pots.map((pot) => (
            <li
              key={pot.label}
              className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10 sm:px-5"
            >
              <span className="flex min-w-0 items-center gap-3">
                <span className={`size-3 shrink-0 rounded-full ${pot.bar}`} />
                <span className="leading-tight">
                  <span className="block font-medium">{pot.label}</span>
                  <span className="text-sm text-white/60 tabular-nums">
                    {pot.share}% of sales
                  </span>
                </span>
              </span>
              <span className="font-bold whitespace-nowrap tabular-nums">
                {formatKes((total * pot.share) / 100)}
              </span>
            </li>
          ))}
        </ul>

        <p
          aria-live="polite"
          className="mt-8 text-lg leading-relaxed text-white-400"
        >
          Each {period.noun}, you&apos;d keep{" "}
          <strong className="text-pink-ish">
            {formatKes((total * profit) / 100)}
          </strong>{" "}
          as profit, safely away from your restocking and loan money.
        </p>
        <p className="mt-auto pt-8 text-xs text-white/50">
          Estimates for planning only. Monthly figures assume 52 weeks a year.
        </p>
      </div>
    </div>
  );
};

export default SplitCalculator;
