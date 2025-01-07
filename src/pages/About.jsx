import React from "react";
import { images } from "../constants/index.js";
const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-14">
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">Discover who we are and what we stand for.</p>
        </div>
      </header>

      <section className="container mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src={images.WhoWeAre}
              alt="Reliable Truck Dispatching"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:ml-10 mt-8 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Logistics Hub is dedicated to providing reliable truck dispatching services. 
              With years of experience in the logistics industry, we are committed to ensuring 
              efficiency and reliability in every aspect of our work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <p className="text-gray-700 leading-relaxed">
            At Logistics Hub, we prioritise customer satisfaction by offering 24/7 dispatch support, 
            fast load matching, and seamless communication. Our goal is to make your logistics operations 
            smooth and hassle-free.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Our Relationships</h2>
            <p className="text-gray-700 leading-relaxed">
              We have established strong relationships with major online load boards like 
              <span className="font-medium"> DAT, Truckstop,</span> and <span className="font-medium">Sylectus</span>, 
              as well as top brokers in the industry. These connections allow us to secure the best opportunities 
              for our clients.
            </p>
          </div>
          <div className="md:w-1/2 md:ml-10 mt-8 md:mt-0">
            <img
              src={images.Relation}
              alt="Major Online Load Boards"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
