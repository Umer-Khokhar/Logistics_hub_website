import React, { useState } from "react";
import { images } from "../constants";

import { LazyLoadBackground } from ".";

const ProportionsData = [
  {
    title: "Wide Range of Trucks",
    description:
      "Dispatch services for dry vans, reefers, flatbeds, hotshots, and box trucks.",
    img: images.RangeTrucks,
    price: 30,
  },
  {
    title: "Premium Freight Access",
    description: "Get matched with high-quality loads in real-time.",
    img: images.PremiumFreight,
    price: 40,
  },
  {
    title: "24/7 Dispatch Support",
    description: "Our team is available around the clock to support you.",
    img: images.SupportAgent,
    price: 20,
  },
];
const Proportions = () => {
  return (
    <div className="proportion grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8">
      {ProportionsData.map((ProData) => (
        <div
          key={ProData.title}
          className="relative mx-auto group lg:w-[28rem] md:h-[24rem] w-11/12 h-[20rem] bg-gray-200 cursor-pointer"
        >
          <LazyLoadBackground img={ProData.img}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
          </LazyLoadBackground>

          <div className="content absolute inset-0 flex gap-10 flex-col items-center justify-start text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 group-opacity-100: transition-opacity p-4">
            <h3 className="text-3xl font-bold">{ProData.title}</h3>
            <p className="text-xl text-center">{ProData.description}</p>
            <div className="absolute left-0 md:bottom-14 bottom-10 w-full">
              <div>
                <p className="pl-4">From</p>
                <p className="md:text-2xl text-3xl pl-4">${ProData.price}</p>
              </div>
              <div className=" pl-4 absolute bg-blue-600 text-white md:text-2xl w-full py-3">
                Apply
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Proportions;
