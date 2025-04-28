import React from "react";
import Nav from "../components/NavBar";
import { Demo } from "../components/Carousel";
import MobileNav from "../components/MobileNav";

const Hero = ({ isOpen, setIsOpen }) => {
  return (
    <div className="h-screen bg-primary bg-opacity-10 py-16 ">
      <Nav />
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* Mobile Handburger menu */}
      <div className="flex justify-between sm:hidden p-6 px-8 absolute top-0 left w-full ">
        <p>logo</p>
        <div className="fixed flex items-center gap-2 font-bold right-8 p-2 z-10 bg-white/30 backdrop-blur-lg rounded shadow" onClick={() => setIsOpen(!isOpen)}>
          Menu <i className="fa fa-bars "></i>
        </div>
      </div>
      <section className="flex justify-between container mx-auto pt-12">
        <div className="text-gray-800 w-[40%] flex flex-col gap-2 justify-center">
          <h1 className="text-[min(10vw,_70px)] font-bold tracking-widest text-green-900">
            MEMARK
          </h1>
          <h3 className="text-3xl font-bold tracking-wide text-green-900">
            CALIBRATION SERVICES LIMITED
          </h3>
          <p>
            We specialize in the precise calibration of storage tanks: road
            tankers, level guage, underground tanks, and other industrial
            systems. Our experienced team ensures your equipment runs safely,
            efficiently, and in full compliance.
          </p>
        </div>
        <div className="rounded-lg w-[500px] h-[500px] bg-white/40 backdrop-blur-lg shadow-lg flex items-center justify-center relative">
          <div className="absolute top-4 left-3 text-black flex gap-2">
            <span className="w-[20px] h-[20px] rounded-full bg-red-700"></span>
            <span className="w-[20px] h-[20px] rounded-full bg-yellow-300"></span>
            <span className="w-[20px] h-[20px] rounded-full bg-green-600"></span>
          </div>
          {/* <div
            style={{
              backgroundImage: `url(${storageTank})`,
            }}
            className="bg-cover bg-center w-full h-[80%] "
          ></div> */}
          <Demo />
        </div>
      </section>
    </div>
  );
};

export default Hero;
