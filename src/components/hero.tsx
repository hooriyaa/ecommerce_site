"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-orange-100  items-center">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col justify-center items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center text-center mb-16 md:mb-0">
          <p className="mb-2 leading-relaxed sm:text-3xl text-2xl text-black">
            Sale Up to 50% off!
          </p>

          <h1 className="title-font  sm:text-4xl sm:text-center  text-3xl mb-8 font-semibold text-gray-900">
            OUR FALL COLLECTION
            <br></br>
            HAS ARRIVED
          </h1>
          <div className="flex justify-center items-center">
            <button className="inline-flex  text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded-md text-lg">
              Shop Now
            </button>
          </div>
        </div>
        <div className="md:max-w-sm w-1/2 md:mr-20 bg-orange-100 ">
          <Image
            className="object-cover object-center rounded-3xl hover:scale-105 duration-500 hover:duration-500"
            alt="Hero"
            src={require("../../public/pictures/hero.jpg")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
