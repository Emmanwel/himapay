import { CodeXml, Handshake, Layers, Sparkles, Wallet } from "lucide-react";

const capabilities = [
  { icon: Layers, label: "Payment aggregation" },
  { icon: Wallet, label: "Wallets" },
  { icon: Handshake, label: "Escrow" },
  { icon: Sparkles, label: "Value-added services" },
];

// Animated "marching ants" line between the diagram nodes.
const Connector = () => (
  <>
    <span className="mx-auto block h-10 w-0.5 animate-march-y bg-[repeating-linear-gradient(to_bottom,var(--color-pink-ish)_0_6px,transparent_6px_12px)] lg:hidden" />
    <span className="hidden h-0.5 w-full min-w-10 flex-1 animate-march-x bg-[repeating-linear-gradient(to_right,var(--color-pink-ish)_0_6px,transparent_6px_12px)] lg:block" />
  </>
);

const ApiDiagram = () => (
  <div
    role="img"
    aria-label="Diagram: your app connects to the MIZIZI API, which gives access to payment aggregation, wallets, escrow and value-added services"
    className="flex flex-col items-stretch rounded-[32px] bg-black p-6 text-white sm:p-10 lg:flex-row lg:items-center"
  >
    <div className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10 lg:w-48">
      <CodeXml aria-hidden="true" className="mx-auto size-8 text-blue-teal" />
      <p className="mt-3 font-semibold">Your app</p>
      <p className="text-sm text-white/60">Web, mobile or POS</p>
    </div>
    <Connector />
    <div className="rounded-2xl bg-linear-to-br from-blue-teal to-pink-ish p-px">
      <div className="rounded-2xl bg-black px-8 py-7 text-center">
        <p className="text-xs font-bold tracking-widest text-blue-teal uppercase">
          HimaPay
        </p>
        <p className="mt-1 text-2xl font-extrabold">MIZIZI API</p>
      </div>
    </div>
    <Connector />
    <ul className="grid gap-3 sm:grid-cols-2 lg:w-72 lg:grid-cols-1">
      {capabilities.map((capability) => (
        <li
          key={capability.label}
          className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10"
        >
          <capability.icon
            aria-hidden="true"
            className="size-5 text-pink-ish"
          />
          <span className="font-medium">{capability.label}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ApiDiagram;
