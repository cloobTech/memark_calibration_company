import React, { useState } from "react";
import logo from "../assets/logos/memark.png";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const clearInput = () => {
    setInputValue("");
  };
  return (
    <div className="mt-[12] sm:mt-24 bg-green-900 text-white">
      <div className="p-12">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="">
            <div className="font-bold text-brand-dark text-2xl mb-2 flex items-center justify-center sm:justify-start gap-2">
              <img src={logo} alt="logo" srcset="" className="w-24 h-auto" />
              Memark
            </div>
            <ul className="flex gap-6 text-xs justify-center sm:justify-start">
              <li>
                <a href="#about_us">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contacts">Contacts</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#clientele">Clientele</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="mt-6 sm:mt-0">
            <div className="mb-2 text-center sm:text-start">
              Join our news letter
            </div>
            <div>
              <input
                onChange={handleInputChange}
                value={inputValue}
                type="text"
                placeholder="Enter your email address"
                className="bg-white text-gray-800 p-3 rounded mr-4 sm:min-w-[300px] w-full"
              />
              <button
                onClick={clearInput}
                className="cursor-pointer px-4 py-2 bg-green-600 text-white font-bold rounded mt-2 w-full "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="bg-gray-300 my-8" />
        <div className="flex justify-between items-center">
          <div className="">
            &copy; {new Date().getFullYear()}. All Rights Reserved
          </div>
          <div className="flex gap-4">
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
