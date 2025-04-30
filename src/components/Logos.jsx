import React from "react";
import aliko from "../assets/logos/aliko.png";
import aa_rano from "../assets/logos/aa_rano.png";
import amasco from "../assets/logos/amasco.png";
import coinoil from "../assets/logos/coinoil.webp";
import mai_kifi from "../assets/logos/mai_kifi.png";
import nnpc from "../assets/logos/nnpc.png";
import total from "../assets/logos/total.png";
import shafa from "../assets/logos/shafa.png";
import mobil from "../assets/logos/mobil.png";
import shema from "../assets/logos/shema.png";
import aspira from "../assets/logos/Aspira.png";
import setraco from "../assets/logos/setraco.png";
//               Clientele

const logos = [
  aa_rano,
  amasco,
  coinoil,
  mai_kifi,
  nnpc,
  total,
  aliko,
  shafa,
  setraco,
  mobil,
  shema,
  aspira,
];

const unindentifiedLogos = [
  "Mamu Oil",
  "Silver Frieght",
  "Johnmac Oil & Gas",
  "Arewa Integrated Food & Beverage Company Ltd",
];

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
        <>
          {unindentifiedLogos.map((items, index) => (
            <div key={index} className="shadow-md rounded p-2 px-6 flex items-center justify-center text-2xl font-bold text-gray-600">
              {items}
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default Logos;
