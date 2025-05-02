import React from "react";

const ServiceStationGallery = ({ open, service_station, images }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md max-h-[520px] md:max-h-[700px] overflow-y-auto">
      <h3 className="text-gray-800 text-center mb-4">{`${service_station}`}</h3>
      <div className="grid  grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            onClick={() => open(image)}
            key={index}
            src={image}
            alt={`Logo ${index + 1}`}
            className="size-22 p-2 flex-shrink-0 shadow-md rounded md:size-32 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceStationGallery;
