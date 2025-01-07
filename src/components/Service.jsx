import React from "react";
import { images } from "../constants";
import ContactBtn from "./ContactBtn";

const Service = ({ category, bgColor, textColor, direction }) => {
  const { title, description, items, image } = category;

  return (
    <div className={`${bgColor} ${textColor} flex flex-col px-12 pb-8`}>
      <div className="main-heading text-center py-6 mb-10">
        <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
      <div className={`flex justify-center gap-14 items-center flex-col w-full ${direction}`}>
        <img className="lg:w-1/2 w-full object-cover" src={image} alt={`${title} image`} loading="lazy"/>
        <div className="all-categories">
          <ul className="grid sm:grid-cols-2 gap-14">
            {items.map((item, index) => (
              <div className="flex items-center gap-3">
                <img src={images.CheckLogo} alt="check logo"  width={18}/>
                <li key={index}>{item}</li>

              </div>
            ))}
            </ul>
            <ContactBtn />
        </div>
      </div>
    </div>
  );
};

export default Service;
