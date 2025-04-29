import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constant";

const Services = () => {
  return (
    <div className="bg-green-900  p-4 py-[60px] mt-18 " id="services">
      <h1 className="text-center text-white text-2xl sm:text-3xl font-bold mb-[60px]">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 container ">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
