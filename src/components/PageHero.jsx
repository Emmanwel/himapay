import Backdrop from "./Backdrop";

const PageHero = ({ eyebrow, title, description, actions, visual }) => {
  const centered = !visual;
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <Backdrop />
      <div
        className={`max-container ${visual ? "grid items-center gap-16 lg:grid-cols-2" : ""}`}
      >
        <div className={centered ? "mx-auto max-w-4xl text-center" : ""}>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-neutral-200 backdrop-blur">
            <span className="size-2 rounded-full bg-pink-ish" />
            {eyebrow}
          </p>
          <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-6xl">
            {title}
          </h1>
          <p
            className={`mt-6 text-lg leading-relaxed text-pretty text-slate-gray sm:text-xl ${centered ? "mx-auto max-w-2xl" : "max-w-xl"}`}
          >
            {description}
          </p>
          {actions && (
            <div
              className={`mt-10 flex flex-col gap-3 sm:flex-row ${centered ? "sm:justify-center" : ""}`}
            >
              {actions}
            </div>
          )}
        </div>
        {visual}
      </div>
    </section>
  );
};

export default PageHero;
