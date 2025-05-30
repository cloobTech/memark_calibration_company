import React from "react";

const ServiceCard = ({ title, content, useTick, icon }) => {
  return (
    <div className="min-h-[200px] w-auto bg-white/10 p-4 rounded text-white shadow">
      <div>
        <i className={`${icon} border-2 p-2 min-w-[36px] text-center rounded`}></i>

        <p className="font-bold my-2">{title}</p>
      </div>
      <ul className="text-xs ">
        {content.map((item, index) => (
          <li key={index} className="flex gap-2  text-gray-300">
            {useTick && <i className="fa fa-circle-check mt-[2px] text-xs"></i>}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
