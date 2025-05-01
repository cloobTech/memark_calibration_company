import React from "react";
import ServiceStationGallery from "../components/ServiceStationGallery";
import { image_gallery } from "../constant/gallery";

const Gallery = ({ open }) => {
  return (
    <section id="gallery" className="py-[30px] sm:pt-[40px]">
      <p className="text-center font-bold text-gray-700 text-shadow-lg  text-2xl sm:text-3xl">
        Our Gallery
      </p>
      <p className="text-gray-600 text-center mb-8">
        Click on an image to preview
      </p>
      <div className="container  grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
        {image_gallery.map((station, index) => (
          <ServiceStationGallery open={open} {...station} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
