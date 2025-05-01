import React from "react";
import logo from "../assets/logos/memark.png";

const MobileNav = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`block sm:hidden fixed top-0 left-0  w-[70%] h-[70px] px-6 flex flex-col z-[50] transition-all duration-500 ease-in-out bg-white/30 backdrop-blur-lg shadow-lg text-black h-screen ${
        isOpen ? "left-0" : "left-[-100%]"
      }`}
    >
      <div className="flex justify-between items-center ml-[-12px]">
        <p className="font-bold text-2xl ">
          {" "}
          <img src={logo} alt="logo" srcset="" className="w-24 " />
        </p>
        <i
          className="text-2xl fa fa-times"
          onClick={() => setIsOpen(false)}
        ></i>
      </div>
      <ul className="flex flex-col gap-6 mb-6 font-bold">
        <li onClick={() => setIsOpen(false)}>
          <a href="#about_us">About Us</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#services">Services</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#contacts">Contacts</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#gallery">Gallery</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#clientele">Clientele</a>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
      <a href="#contacts" onClick={() => setIsOpen(false)}>
        <button className="font-bold rounded bg-green-900 text-white px-6 py-2 cursor-pointer hover:bg-green-700 transition-all duration-300 ease-in-out">
          Contact Us
        </button>
      </a>
    </div>
  );
};

export default MobileNav;
