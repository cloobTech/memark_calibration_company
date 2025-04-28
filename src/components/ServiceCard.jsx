import React from "react";

const ServiceCard = () => {
  return (
    <div className="min-h-[200px] w-auto bg-white/10 p-4 rounded text-white shadow">
      <div cl>
        <i className="fa fa-home border-2 p-2 rounded"></i>

        <p className="font-bold my-2">Title</p>
      </div>
      <ul>
        <li className="flex  gap-2">
          <i className="fa fa-star text-xs mt-[6px]"></i>
          <span>content: Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt </span>
        </li>
        <li className="flex items-center gap-2">
          <i className="fa fa-star text-xs"></i>
          <span>content</span>
        </li>
        <li className="flex items-center gap-2">
          <i className="fa fa-star text-xs"></i>
          <span>content</span>
        </li>
        <li className="flex items-center gap-2">
          <i className="fa fa-star text-xs"></i>
          <span>content</span>
        </li>
      </ul>
    </div>
  );
};

export default ServiceCard;
