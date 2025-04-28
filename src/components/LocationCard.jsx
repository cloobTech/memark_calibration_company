import React from "react";

const LocationCard = () => {
  return (
    <div className="h-[300px] shadow-lg rounded-lg bg-black/70 p-8">
      <div className="flex flex-col justify-center gap-4  h-full text-white">
        <p className="flex gap-4 mb-4">
          <i className="fa fa-location-dot my-[4px]"></i>
          <p className="font-bold">
            Kano Calibration Office <br />
            <p className="text-xs mt-2 ">
              Off Airport Rd, from Pounded Yam to Jaba, by Shago Tara Bus Stop,
              Jaba Ungogo L.G.A, Kano.
            </p>
          </p>
        </p>
        <p className="flex gap-4 mb-4">
          <i className="fa fa-phone my-[4px]"></i>
          <p className=" ">
            +234 902 000 0000 <br />
            <p className="text-xs mt-2 ">
              Monday - Saturday: 8:00 AM - 5:00 PM
            </p>
           
          </p>
        </p>
        <p className="flex gap-4 mb-4">
          <i className="fa fa-envelope my-[4px]"></i>
          <p className=" ">
            memarkintertional@gmail.com
          </p>
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
