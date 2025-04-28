import React from "react";
import LocationCard from "../components/LocationCard";
import { locations } from "../constant";

const Contacts = () => {
  return (
    <div
      className="relative bg-gray-200 bg-[url('./assets/map_2.png')] bg-cover bg-center"
      id="contacts"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/80"></div>
      {/* Content */}
      <div></div>
      <div className="relative z-10 text-white h-full">
        <h1 className="text-center font-bold text-2xl sm:text-3xl mb-4 text-gray-800 pt-[60px] ">
          Our Service Locations
        </h1>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  gap-12 p-4 py-[30px]">
          {locations.map((item, index) => (
            <LocationCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
