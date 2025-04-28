import React, { useState, useEffect } from "react";

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
      className={` z-20 transition-all duration-500 ease-in-out  h-[60px] z-1  fixed top-0 left-0 w-full  text-sm  ${
        isScrolled ? scrolledStyle : ""
      }`}
    >
      <div className=" container relative flex items-center justify-center mx-auto h-full">
        <div className="flex items-center gap-4 absolute left-0">
          <p className="text-green-900 font-bold">Logo</p>
        </div>
        <ul className="flex gap-4 font-bold text-green-900">
          <li>About Us</li>
          <li>Services</li>
          <li>Contacts</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
