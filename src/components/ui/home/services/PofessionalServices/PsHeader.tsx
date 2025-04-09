import React from "react";
import Img from "../../../../../assets/Image/Gif3.gif";

const HeadSection: React.FC = () => {
  return (
    <div
      className="flex min-h-[600px] items-center justify-center bg-fixed bg-cover"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="bg-[#00000014] w-full bg-opacity-55 h-full flex flex-col text-white py-28 sm:py-32 md:py-44 px-6 sm:px-12 md:px-24 lg:px-56">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center sm:text-left">
          Professional Services -<br />vCISO & vDPO
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl shadow-sm p-4 border-l-8 border-[#4096B5] text-center sm:text-left">
          Expert guidance for security & compliance
        </p>
        <div className="text-center sm:text-left py-6">
          <button className="bg-[#4096B5] hover:bg-[#4682B4] text-white font-bold py-3 px-6 rounded-lg">
            VIEW SERVICES
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeadSection;
