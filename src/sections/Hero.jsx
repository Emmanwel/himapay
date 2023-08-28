import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-full flex flex-col justify-center items-center w-full  max-xl:padding-x pt-18">
          <h1 className="mt-7 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
              Himapay AIMS ffff
            </span>
            <br />
            <span className="text-coral-red inline-block mt-2">
              TO BLA BLA
            </span>{" "}
            Company
          </h1>
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Himapay arrivals, quality comfort, and innovation
            for your active life.
          </p>

          <div className="mt-11 flex gap-4 justify-between">
            {/* First set with different heading */}
            <div className="flex justify-start">
              <div className="flex flex-col items-start">
                <div className="items-center">
                  <h2 className="text-xl font-bold text-center items-center mb-3">
                    Register as Business
                  </h2>
                </div>

                <div className="flex gap-2">
                  <Button
                    label="Merchant Dashboard"
                    backgroundColor="bg-white"
                    borderColor="border-slate-gray"
                    textColor="text-slate-gray"
                  />
                </div>
              </div>
            </div>

            {/* Second set with different heading */}
            <div className="flex flex-col items-start">
              <div className="flex justify-center items-center text-center">
                <h2 className="text-xl font-bold text-center items-center mb-3">
                  Register as Business
                </h2>
              </div>

              <div className="flex gap-4">
                <Button
                  label="Appstore"
                  backgroundColor="bg-white"
                  borderColor="border-slate-gray"
                  textColor="text-slate-gray"
                />
                <Button label="Playstore" iconURL={arrowRight} />
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
