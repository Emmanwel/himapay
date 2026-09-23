const SectionHeading = ({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
}) => (
  <div
    className={
      align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"
    }
  >
    {eyebrow && (
      <p className="text-sm font-bold tracking-widest text-pink-ish-600 uppercase">
        {eyebrow}
      </p>
    )}
    <Heading
      id={id}
      className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl"
    >
      {title}
    </Heading>
    {description && <p className="mt-5 info-text text-pretty">{description}</p>}
  </div>
);

export default SectionHeading;
