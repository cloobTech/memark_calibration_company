import React, { useState, useEffect } from "react";
import logo from "../assets/logos/memark.png"

const scrolledStyle = "bg-white/30 backdrop-blur-lg shadow-lg text-black";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={` hidden z-[50] transition-all duration-500 ease-in-out  h-[65px] z-1  sm:block fixed top-0 left-0 w-full  text-sm  ${
        isScrolled ? scrolledStyle : ""
      }`}
    >
      <div className=" container relative flex items-center justify-between h-full">
        <p className="text-green-600 font-bold ">
          <img src={logo} alt="logo" srcset="" className="w-24 h-auto" />
        </p>
        <ul className="flex gap-4 font-bold text-green-600">
          <li>
            <a
              href="#about_us"
              className="hover:text-green-700 transition-all duration-500 ease-in-out"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-green-700 transition-all duration-500 ease-in-out"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="hover:text-green-700 transition-all duration-500 ease-in-out"
            >
              Contacts
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="hover:text-green-700 transition-all duration-500 ease-in-out"
            >
              FAQ
            </a>
          </li>
        </ul>
        <a href="#contacts">
          <button className="font-bold rounded bg-green-900 text-white px-6 py-2 cursor-pointer hover:bg-green-700 transition-all duration-300 ease-in-out">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Nav;
