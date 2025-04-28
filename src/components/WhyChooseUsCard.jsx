import React from "react";

const WhyChooseUsCard = ({ title, content, icon }) => {
  return (
    <div>
      <i className={`${icon} text-green-700`}></i>
      <h2 className="font-bold">{title}</h2>
      <small className="text-gray-600">{content}</small>
    </div>
  );
};

export default WhyChooseUsCard;
