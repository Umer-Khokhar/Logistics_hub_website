import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const navToggle = () => {
    if (isOpen) {
      setIsClosing(true);

      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 50);
    } else {
      setIsOpen(true);
    }
  };
  let liNavigation = ["Services", "About Us", "FAQ", "Contact Us"];
  return (
    <div className="px-10 bg-white shadow-xl mb-5 py-6 fixed top-0 right-0 w-full z-50">
      <div className="main-menu hidden md:flex justify-between">
        <header className="header text-2xl font-bold">
          <Link to={"/"}>Logistics Hub</Link>{" "}
        </header>
        <nav className="nav font-poppins">
          <ul className="flex gap-8">
            {liNavigation.map((liNav, index) => {
              const formattedLink = liNav.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link key={index} to={`/${formattedLink}`}>
                  <li className="cursor-pointer">{liNav}</li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* // Mobile Navigation */}
      <div className="nav-menu md:hidden flex justify-between items-center">
        <header className="header text-2xl font-bold">Logistics Hub</header>
        <IoMenu
          className="text-3xl cursor-pointer"
          onClick={() => navToggle()}
        />

        {isOpen && (
          <>
            <ul className="fixed h-full  md:right-full right-0 bottom-0 top-0 z-40 bg-white w-9/12 text-black sm:w-2/3 py-3 rounded-md flex flex-col gap-4 pt-20 px-10">
              <IoClose
                className="text-6xl text-black absolute right-4 top-4 cursor-pointer"
                onClick={() => navToggle()}
              />
              {liNavigation.map((liNav, index) => {
                const formattedLink = liNav.toLowerCase().replace(/\s+/g, "-");
                return (
                  <Link
                    key={index}
                    onClick={() => navToggle()}
                    to={`/${formattedLink}`}
                  >
                    <li className="cursor-pointer mt-4 border-b border-black/55 pb-3 font-semibold hover:opacity-40">
                      {liNav}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
