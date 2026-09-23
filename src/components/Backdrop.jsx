// Soft brand-coloured glow and grid used behind page heroes.
const Backdrop = () => (
  <div aria-hidden="true" className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-linear-to-b from-pale-blue via-white to-white" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(0_0_0/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.04)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_top,black_20%,transparent_70%)] bg-size-[56px_56px]" />
    <div className="absolute -top-40 -right-40 size-144 rounded-full bg-pink-ish/25 blur-3xl" />
    <div className="absolute top-32 -left-48 size-128 rounded-full bg-blue-teal/25 blur-3xl" />
  </div>
);

export default Backdrop;
