import React from 'react';
import { Link } from "react-router-dom"
import { images } from "../constants";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-auto lg:h-[32rem] flex items-center w-full mt-20"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6) 80%), url(${images.HeroImage})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      {/* Text and content */}
      <div className="py-10 lg:pt-0 md:pl-20 pl-8 sm:w-11/12 w-full lg:w-2/3 flex flex-col gap-4 justify-start items-start text-white p-4 z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:w-10/12">Reliable Truck Dispatching Services Across the USA</h1>
        <p className="text-lg md:text-xl mb-6">
          Short intro emphasizing our 24/7 dispatch service, matching truckers with high-quality loads (dry vans, reefers, flatbeds, hotshots, and box trucks)
        </p>
        <Link to="/contact-us">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
        Get Started Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
