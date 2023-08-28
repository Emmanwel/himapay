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
              Himapay AIMS THIS AND
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
          <div className="mt-11 flex gap-10 px-20">
            {/* First set with different heading 
          
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

          */}

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
                <div className="flex gap-4">
                  <Button label="Playstore" iconURL={arrowRight} />
                  <Button
                    label="Appstore"
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

          {/*  <div className="relative xl:w-full flex flex-col justify-center items-center w-full max-xl:padding-x pt-18">
            

            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing the release of our product.{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className=" tracking-tight text-gray-900 sm:text-5xl mt-7 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                HIMAPAY AIMS TO BLA Secure platform
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="flex justify-between items-center pl-20">
                <div className="mt-14">
                  <h1>Register as a Business</h1>
                  <div className="mt-5 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Merchant Dashboard
                    </a>
                  </div>
                </div>
                <div className="mt-14 pr-20">
                  <h2>Register as an Individual </h2>

                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      PlayStore
                    </a>
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-gray-900"
                    >
                      Appstore <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        */}
        </div>
      </section>
    </>
  );
};

export default Hero;
