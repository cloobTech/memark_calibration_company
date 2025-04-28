import React from "react";
import AboutContent from "../components/AboutContent";
import { about_us_content } from "../constant";

const AboutCard = () => {
  return (
    <div className="container bg-white shadow-lg rounded-lg  relative top-[-150px] p-8 flex flex-col">
      <span className="w-[200px] h-[4px] bg-gradient-to-r from-green-900 to-green-300/1"></span>
      <div className="py-2">
        {about_us_content.map((item, index) => (
          <AboutContent key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
