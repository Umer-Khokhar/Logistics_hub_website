import React from "react";
import { Link } from "react-router-dom";
import { images } from "../constants";
const Optimize = () => {
  return (
    <div className="relative text-white text-center py-8">
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 via-black/75 to-black/50 bg-cover bg-center bg-no-repeat opacity-90 z-[-1]"
        style={{ backgroundImage: `url(${images.OptimizeImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>
      <h1 className="text-4xl font-bold">Start Optimizing Today</h1>
      <p className="my-6 text-lg lg:w-1/2 w-full  mx-auto">
        Contact us now to experience the difference with our superior
        dispatching services. Let’s elevate your logistics operations!
      </p>
      <Link to="contact-us">
      <button className="bg-red-600 text-white py-3 px-6 rounded-md">
        Get Started
      </button>
      </Link>
    </div>
  );
};

export default Optimize;
