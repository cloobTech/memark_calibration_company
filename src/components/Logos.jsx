import React from "react";
import aliko from "../assets/logos/aliko.png";
import aa_rano from "../assets/logos/aa_rano.png";
import amasco from "../assets/logos/amasco.png";
import coinoil from "../assets/logos/coinoil.webp";
import mai_kifi from "../assets/logos/mai_kifi.png";
import nnpc from "../assets/logos/nnpc.png";
import total from "../assets/logos/total.png";

const logos = [aa_rano, amasco, coinoil, mai_kifi, nnpc, total, aliko];

const Logos = () => {
  return (
    <div className=" overflow-x-auto whitespace-nowrap py-4">
      <div className="flex gap-8 px-4 justify-start">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-24 h-auto p-2 flex-shrink-0 shadow-md rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default Logos;
