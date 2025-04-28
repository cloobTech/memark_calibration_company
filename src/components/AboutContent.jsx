import React from "react";

const AboutContent = ({ title, content }) => {
  return (
    <div className="my-4 ">
      <h3 className="text-gray-700 mb-[2px]">{title}</h3>
      <p className="text-sm text-gray-500">{content}</p>
    </div>
  );
};

export default AboutContent;
