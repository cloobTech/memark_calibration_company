import React from "react";

const LocationCard = ({ title, address, phone, phone_2, email }) => {
  return (
    <div className="min-h-[300px] shadow-lg rounded-lg bg-black/70 p-4 sm:p-8">
      <div className="flex flex-col justify-center gap-4  h-full text-white">
        <p className="flex gap-2 sm:gap-4 mb-4">
          <i className="fa fa-location-dot my-[4px]"></i>
          <p className="font-bold">
            {title} <br />
            <p className="text-xs mt-2 ">{address}</p>
          </p>
        </p>
        <p className="flex gap-2 sm:gap-4 mb-4">
          <i className="fa fa-phone my-[4px]"></i>
          <p className=" ">
            <>{phone}</>
            <br />
            {phone_2}
            <br />
            <p className="text-xs mt-2 ">
              Monday - Saturday: 8:00 AM - 5:00 PM
            </p>
          </p>
        </p>
        <p className="flex gap-2 sm:gap-4">
          <i className="fa fa-envelope sm:my-[3px] "></i>
          <p className="text-xs sm:text-sm">{email}</p>
          
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
