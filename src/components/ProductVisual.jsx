import {
  BellRing,
  Check,
  ChefHat,
  CircleCheck,
  Code,
  Lock,
  ScanLine,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

// Illustrative interface mock-ups for each product. Names and figures are
// examples, not real data.

const Card = ({ className = "", children }) => (
  <div
    className={`rounded-3xl bg-white p-6 shadow-3xl ring-1 ring-black/5 ${className}`}
  >
    {children}
  </div>
);

const Chip = ({ icon: Icon, children, className = "" }) => (
  <div
    className={`absolute flex animate-float items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold shadow-xl ring-1 ring-black/5 ${className}`}
  >
    <Icon aria-hidden="true" className="size-5 text-pink-ish-600" />
    {children}
  </div>
);

const RetailDashboard = () => {
  const segments = [
    { name: "Nairobi", value: 92 },
    { name: "Mombasa", value: 68 },
    { name: "Kisumu", value: 54 },
    { name: "Nakuru", value: 76 },
    { name: "Eldoret", value: 40 },
  ];
  return (
    <>
      <Card>
        <div className="flex items-center justify-between">
          <p className="font-semibold">Product performance</p>
          <span className="flex items-center gap-2 text-xs font-semibold text-blue-teal-800">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-blue-teal" />
              <span className="relative size-2 rounded-full bg-blue-teal" />
            </span>
            Live
          </span>
        </div>
        <p className="mt-1 text-sm text-slate-gray">
          Units sold by market segment
        </p>
        <div className="mt-8 flex h-44 items-end gap-3">
          {segments.map((segment, index) => (
            <div
              key={segment.name}
              className="flex h-full flex-1 flex-col items-center justify-end gap-2"
            >
              <div
                className={`w-full rounded-t-xl ${index % 2 ? "bg-pink-ish" : "bg-blue-teal"}`}
                style={{ height: `${segment.value}%` }}
              />
              <span className="text-[11px] font-medium text-slate-gray">
                {segment.name}
              </span>
            </div>
          ))}
        </div>
      </Card>
      <Chip icon={TrendingUp} className="-right-4 -bottom-6 sm:-right-8">
        Maize flour 2kg <span className="text-blue-teal-800">+18%</span>
      </Chip>
    </>
  );
};

const EscrowTimeline = () => {
  const milestones = [
    {
      title: "Client funds the project",
      note: "KES 150,000 held in escrow",
      done: true,
    },
    {
      title: "Developer delivers",
      note: "Code submitted for review",
      done: true,
    },
    {
      title: "Payment released",
      note: "Developer paid · client owns the code",
      done: false,
    },
  ];
  return (
    <>
      <Card>
        <p className="font-semibold">Mobile banking app · Project</p>
        <p className="mt-1 text-sm text-slate-gray">Escrow progress</p>
        <ol className="mt-8 space-y-0">
          {milestones.map((milestone, index) => (
            <li
              key={milestone.title}
              className="relative flex gap-4 pb-8 last:pb-0"
            >
              {index < milestones.length - 1 && (
                <span className="absolute top-10 left-5 h-[calc(100%-2.5rem)] w-0.5 bg-linear-to-b from-blue-teal to-pink-ish" />
              )}
              <span
                className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
                  milestone.done
                    ? "bg-blue-teal text-white"
                    : "bg-pink-ish text-white ring-8 ring-pink-ish-100"
                }`}
              >
                {milestone.done ? (
                  <Check aria-hidden="true" className="size-5" />
                ) : (
                  <Code aria-hidden="true" className="size-5" />
                )}
              </span>
              <span className="pt-1">
                <span className="block font-semibold">{milestone.title}</span>
                <span className="text-sm text-slate-gray">
                  {milestone.note}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </Card>
      <Chip icon={Lock} className="-top-5 -right-4 sm:-right-8">
        Funds held securely
      </Chip>
    </>
  );
};

const SelfCheckout = () => {
  const items = [
    { name: "Milk 500ml", price: 65 },
    { name: "Bread 400g", price: 60 },
    { name: "Sugar 1kg", price: 180 },
  ];
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return (
    <>
      <div className="mx-auto w-full max-w-[18rem] rounded-[2.75rem] bg-black p-3 shadow-3xl">
        <div className="overflow-hidden rounded-[2.25rem] bg-white">
          <div className="relative mx-4 mt-8 h-36 overflow-hidden rounded-2xl bg-neutral-900">
            <div className="absolute inset-4 rounded-xl border-2 border-dashed border-white/30" />
            <div className="absolute inset-x-6 [top:calc(50%-1.25rem)] flex h-10 items-center justify-center gap-[3px] opacity-80">
              {[3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 3, 1, 2].map(
                (width, index) => (
                  <span
                    key={index}
                    className="h-full bg-white"
                    style={{ width }}
                  />
                ),
              )}
            </div>
            <div className="absolute inset-x-4 h-0.5 animate-scan rounded-full bg-pink-ish shadow-[0_0_12px_2px] shadow-pink-ish" />
            <span className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1 text-[11px] font-semibold text-white">
              <ScanLine aria-hidden="true" className="size-3.5" /> Scanning…
            </span>
          </div>
          <ul className="space-y-3 px-5 pt-5 text-sm">
            {items.map((item) => (
              <li key={item.name} className="flex justify-between">
                <span>{item.name}</span>
                <span className="font-semibold tabular-nums">
                  KES {item.price}
                </span>
              </li>
            ))}
          </ul>
          <div className="mx-5 mt-4 flex justify-between border-t border-neutral-200 pt-4 font-bold">
            <span>Total</span>
            <span className="tabular-nums">KES {total}</span>
          </div>
          <div className="m-5 rounded-full bg-pink-ish py-3 text-center text-sm font-semibold text-white">
            Pay &amp; walk out
          </div>
        </div>
      </div>
      <Chip icon={CircleCheck} className="top-10 -left-2 sm:-left-6">
        No queue
      </Chip>
    </>
  );
};

const FareCard = () => (
  <>
    <Card>
      <div className="flex items-center justify-between">
        <p className="font-semibold">Your trip</p>
        <span className="rounded-full bg-blue-teal-50 px-3 py-1 text-xs font-semibold text-blue-teal-800">
          Route 46
        </span>
      </div>
      <div className="mt-8 flex gap-5">
        <svg
          aria-hidden="true"
          viewBox="0 0 20 150"
          className="h-40 w-5 shrink-0"
        >
          <line
            x1="10"
            y1="12"
            x2="10"
            y2="138"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="6 10"
            strokeLinecap="round"
            className="animate-dash text-neutral-300"
          />
          <circle cx="10" cy="10" r="8" className="fill-blue-teal" />
          <circle cx="10" cy="75" r="5" className="fill-neutral-300" />
          <circle cx="10" cy="140" r="8" className="fill-pink-ish" />
        </svg>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p className="text-xs font-semibold tracking-wide text-slate-gray uppercase">
              Board at
            </p>
            <p className="font-semibold">Kencom Stage, CBD</p>
          </div>
          <p className="text-sm text-slate-gray">4 stops · about 25 min</p>
          <div>
            <p className="text-xs font-semibold tracking-wide text-slate-gray uppercase">
              Alight at
            </p>
            <p className="font-semibold">Westlands Stage</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between rounded-2xl bg-pale-blue px-5 py-4">
        <span className="font-medium">Fare</span>
        <span className="text-2xl font-extrabold tabular-nums">KES 80</span>
      </div>
    </Card>
    <Chip icon={ShieldCheck} className="-top-5 -right-4 sm:-right-8">
      Luggage protected
    </Chip>
  </>
);

const RestaurantBoard = () => {
  const tickets = [
    {
      table: 4,
      items: ["Pilau", "Kachumbari", "Soda"],
      status: "Preparing",
      tone: "bg-pink-ish-50 text-pink-ish-700",
    },
    {
      table: 7,
      items: ["Nyama choma", "Ugali"],
      status: "Ready",
      tone: "bg-blue-teal-50 text-blue-teal-800",
    },
    {
      table: 2,
      items: ["Chapati", "Beans", "Tea"],
      status: "Served",
      tone: "bg-neutral-100 text-neutral-600",
    },
  ];
  return (
    <>
      <Card>
        <div className="flex items-center gap-2 font-semibold">
          <ChefHat aria-hidden="true" className="size-5 text-pink-ish-600" />
          Kitchen orders
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {tickets.map((ticket) => (
            <div
              key={ticket.table}
              className="rounded-2xl bg-pale-blue p-4 ring-1 ring-primary"
            >
              <p className="font-bold">Table {ticket.table}</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-gray">
                {ticket.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span
                className={`mt-4 inline-block rounded-full px-2.5 py-1 text-xs font-semibold ${ticket.tone}`}
              >
                {ticket.status}
              </span>
            </div>
          ))}
        </div>
      </Card>
      <Chip icon={BellRing} className="-bottom-6 -left-2 sm:-left-8">
        Table 7 is ready to serve
      </Chip>
    </>
  );
};

const TokenMeter = () => (
  <>
    <div className="mx-auto mb-5 w-full max-w-xs animate-float rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 sm:absolute sm:-top-4 sm:-right-10 sm:mb-0 sm:w-64">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <span className="flex size-7 items-center justify-center rounded-full bg-pink-ish text-white">
          <Zap aria-hidden="true" className="size-4" />
        </span>
        Tokens loaded
      </div>
      <p className="mt-2 text-sm text-slate-gray">
        KES 1,000 → 34.5 kWh loaded while you were away.
      </p>
    </div>
    <div className="mx-auto w-full max-w-xs rounded-[2rem] bg-neutral-200 p-5 shadow-3xl ring-1 ring-black/5">
      <p className="text-center text-[11px] font-bold tracking-widest text-neutral-500 uppercase">
        Prepaid meter
      </p>
      <div className="mt-3 rounded-xl bg-[#c9e8c1] px-4 py-5 font-mono shadow-inner">
        <p className="text-xs text-neutral-700">Units remaining</p>
        <p className="text-4xl font-bold tracking-wider text-neutral-900 tabular-nums">
          034.5
          <span className="ml-1 text-base">kWh</span>
        </p>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "✕", "0", "↵"].map(
          (key) => (
            <span
              key={key}
              className="flex h-9 items-center justify-center rounded-lg bg-white text-sm font-semibold text-neutral-600 shadow-sm"
            >
              {key}
            </span>
          ),
        )}
      </div>
      <div className="mt-4 flex items-center justify-center gap-1.5 text-xs font-semibold text-neutral-500">
        <Lock aria-hidden="true" className="size-3.5" /> Meter box locked
      </div>
    </div>
  </>
);

const visuals = {
  "retail-management": RetailDashboard,
  "project-escrow": EscrowTimeline,
  "self-checkout": SelfCheckout,
  "fare-payment": FareCard,
  "restaurant-optimization": RestaurantBoard,
  "token-buying": TokenMeter,
};

const ProductVisual = ({ slug, label }) => {
  const Visual = visuals[slug];
  return (
    <div
      role="img"
      aria-label={`Illustration of ${label}`}
      className="relative isolate rounded-[32px] bg-linear-to-br from-pale-blue to-pink-ish-50 px-6 py-12 sm:px-12 sm:py-16"
    >
      <div className="relative mx-auto max-w-md">
        <Visual />
      </div>
    </div>
  );
};

export default ProductVisual;
