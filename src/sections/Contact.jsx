const Contact = () => {
  const phoneNumber = "+254707595799";
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h1 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Let's collaborate on your next solution.
      </h1>

      <div className="text-9xl font-bold mb-4 px-4">
        <a
          href={`tel:${phoneNumber}`}
          className="text-pink-ish hover:text-pink-ish"
        >
          Call Us: {phoneNumber}
        </a>
      </div>
    </section>
  );
};

export default Contact;
