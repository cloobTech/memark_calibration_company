import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="bg-green-900  p-4 py-[60px]">
      <h1 className="text-center text-white text-2xl sm:text-3xl font-bold mb-[60px]">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 container">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
