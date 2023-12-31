import { Button, ButtonStore, ButtonApple } from "../components";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-full flex flex-col justify-center items-center w-full  max-xl:padding-x pt-15 ">
          <h1 className="items-center justify-center text-center uppercase font-palanquin mt-6 text-8xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl max-sm:text-[42px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 text-blue-teal">
              Be intentional about
            </span>
            <br />
            <span className="text-pink-ish inline-block mt-2">
              your finances
            </span>
          </h1>
          <div className="justify-center">
            <p className=" capitalize text-xl text-slate-gray leading-10 mt-6 mb-10 max-w-prose text-center ">
              HimaPay helps retail merchants to manage their sales revenue by
              separating funds right at the point of sale. Don't put money meant
              for restocking, loan repayment or profits all in one basket.
              <br />
              <span className="text-pink-ish mt-2 uppercase font-extrabold">
                Be smart.
              </span>
            </p>
          </div>

          <div className="mt-8 flex gap-10 px-0">
            {/* Second set with different heading */}
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between space-y-4 md:space-y-0 md:space-x-32">
              <div className="flex flex-col">
                <div className="flex justify-center items-center text-center">
                  <h2 className="text-xl font-bold text-center items-center mb-3">
                    Register as a Business
                  </h2>
                </div>
                <div className="flex gap-4">
                  <Button label="Merchant Dashboard" iconURL={arrowRight} />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center items-center text-center">
                  <h2 className="text-xl font-bold text-center items-center mb-3">
                    Register as an Individual
                  </h2>
                </div>

                {/**/}
                <div className="flex sm:flex-row gap-4 flex-col">
                  <ButtonStore label="PlayStore" iconURL={arrowRight} />
                  <ButtonApple
                    label="AppStore"
                    backgroundColor="bg-white"
                    borderColor="border-slate-gray"
                    textColor="text-slate-gray"
                  />
                </div>
              </div>
            </div>
          </div>

          {/*
         <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      */}
        </div>
      </section>
    </>
  );
};

export default Hero;
