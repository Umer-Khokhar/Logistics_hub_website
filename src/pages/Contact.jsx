import React from "react";
import { ReuseHero } from "../components/index.js";
const Contact = () => {
  const heroTitle = ' Contact Logistics Hub for Premium Truck Dispatching Services'
  const heroDesc = 'Get in touch with us today for reliable freight dispatching services.'
  return (
    <>
      <ReuseHero title={heroTitle} description={heroDesc}/>
      <div className="contact-us flex lg:flex-row-reverse flex-col justify-between md:px-48 items-start px-8 mt-12 w-full font-montserrat mb-8">
        <div className="contact lg:w-[28rem] w-full flex flex-col justify-center item-center">
        <h3 className="text-4xl font-bold mb-1 lg:hidden block">Contact Us</h3>
          <form action="" className="flex flex-col gap-4">
            <label htmlFor="name" className="">
              Full Name:
            </label>
            <input
              type="text"
              className="text-lg text-fontGray outline-none border border-gray-400 py-2 px-4"
            />
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              className="text-lg text-fontGray outline-none border border-gray-400 py-2 px-4"
            />
            <label htmlFor="name">Phone No:</label>
            <input
              type="tel"
              className="text-lg text-fontGray outline-none border border-gray-400 py-2 px-4"
            />
            <label htmlFor="">Message:</label>
            <textarea
              name="text"
              id="text"
              cols={15}
              rows={10}
              className="border outline-none text-gray-500"
            ></textarea>
            <button className="bg-blue-600 text-white md:w-40 py-3 rounded-md px-4 cursor-pointer hover:bg-blue-600/50">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-right w-auto grid grid-cols-2 lg:grid-cols-1  lg:gap-12 gap-8 text-start mt-12 lg:mt-0">
          <h3 className="text-4xl font-bold mb-1 hidden lg:block">Contact Us</h3>
          <div className="email">
            <h3 className="text-2xl mb-3">Email:</h3>
            <p className="text-zinc-600">Example@gmail.com</p>
          </div>
          <div className="phone">
            <h3 className="text-2xl mb-3">Phone Number:</h3>
            <p className="text-zinc-600">+1 234 5678975</p>
          </div>
          <div className="map w-full">
            <h3 className="text-2xl mb-3">Address:</h3>
            <p className="text-zinc-600">
            1234, Logistics Lane, Transport City, TX 78901
            </p>
          </div>
        </div>
      </div>
      <div className=" w-11/12 h-2/4 md:w-4/5 mx-auto mb-6">
              <iframe
                className="map w-full h-full mx-auto"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.0544593020018!2d74.31450847528349!3d31.46768804974359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919078306e5e50d%3A0x10ef6f4d532b68f!2sAAA%20Digital!5e0!3m2!1sen!2s!4v1736224499769!5m2!1sen!2s"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
      </div>
    </>
  );
};

export default Contact;
