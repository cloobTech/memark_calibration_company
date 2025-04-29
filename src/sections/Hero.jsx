import React from "react";
import Nav from "../components/NavBar";
import MobileNav from "../components/MobileNav";
import image1 from "../assets/tanker1.jpg";
import image2 from "../assets/tanker2.png";
import image3 from "../assets/tanker3.webp";
import image4 from "../assets/tanker4.jpg";
import image5 from "../assets/tanker5.jpg";
import image6 from "../assets/tanker6.jpg";
import image7 from "../assets/tanker7.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7];

const Hero = ({ isOpen, setIsOpen }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Nav />
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* Mobile Handburger menu */}
      <div className="z-[40] flex justify-between items-center sm:hidden p-6 px-8 absolute top-0 left w-full ">
        <p className="font-bold text-green-600">Memark</p>
        <div
          className="fixed flex items-center gap-2 font-bold right-8 p-2  bg-white/30 backdrop-blur-lg rounded shadow"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu <i className="fa fa-bars "></i>
        </div>
      </div>
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center opacity-0 animate-fade`}
            style={{
              backgroundImage: `url(${image})`,
              animationDelay: `${index * 5}s`, // Delay each image by 5 seconds
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl sm:text-6xl font-bold mb-2 text-green-600">
          Welcome to Memark
        </h1>
        <h3 className="mb-4 sm:text-4xl text-green-600">
          Calibration Services Limited
        </h3>
        <p className="text-lg sm:text-xl max-w-[600px] text-gray-300 font-bold">
          The Mark of Quality Precision in Measurement...
        </p>
      </div>
    </div>
  );
};

export default Hero;
