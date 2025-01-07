import React from "react";
import { images } from "../constants";
const ChooseUs = ({}) => {
  return (
    <div className="choose-us flex md:flex-row flex-col justify-center gap-10 items-center mb-8">
      <div className="choose__info flex flex-col gap-4 pl-10 md:pl-3">
        <h1 className="text-4xl mb-8 font-serif font-bold">Why Choose Us?</h1>
        <div>
          <div className="headings text-2xl font-bold flex items-center gap-3 mb-3">
            <img src={images.CheckLogo} alt="Features image" width={21} loading="lazy"/>
            <h2>Customized Solutions</h2>
          </div>
          <p className="w-5/6">
            Tailored dispatch services to suit your business requirements and
            optimize operations.
          </p>
        </div>
        <div>
          <div className="headings text-2xl font-bold flex items-center gap-3 mb-3">
            <img src={images.CheckLogo} alt="Features image" width={21} loading="lazy"/>
            <h2>24/7 Support</h2>
          </div>
          <p className="w-5/6">
            We provide round-the-clock assistance to ensure seamless dispatch
            operations at all times.
          </p>
        </div>
        <div>
          <div className="headings text-2xl font-bold flex items-center gap-3 mb-3">
            <img src={images.CheckLogo} alt="Features image" width={21} loading="lazy"/>
            <h2>Customer-Centric Approach</h2>
          </div>
          <p className="w-5/6">
            Our dedicated team ensures your satisfaction by putting your
            business needs first.
          </p>
        </div>
      </div>
      <div className="big__image w-11/12 md:w-[600px] md:h-[450px] h-[400px]">
        <img className="w-full h-full bg-cover object-cover rounded-xl shadow-lg" src={images.ChooseUsImg} alt="This is my choose us Image."  loading="lazy"/>
      </div>
    </div>
  );
};

export default ChooseUs