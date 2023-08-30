import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-blue-teal">
          We Provide You
          <span className="text-pink-ish"> Secure </span>
          <span className="text-pink-ish">Payment </span> Solutions
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium services and products, our meticulously crafted
          solutions are designed to elevate your experience, providing you with
          unmatched quality, innovation, and i insightful Developer API.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={278}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
