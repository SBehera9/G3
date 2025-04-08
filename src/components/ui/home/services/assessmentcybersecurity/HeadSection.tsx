import React from "react";
import Img from "../../../../../assets/Image/img29.jpg";

const HeadSection: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center bg-fixed bg-cover"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="bg-[#00000059] w-full bg-opacity-55 h-full flex flex-col text-white py-16 sm:py-24 md:py-32 lg:py-44 px-8 sm:px-12 md:px-24 lg:px-56">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-4 mt-16">
          Cybersecurity Assessment Services
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl shadow-sm p-4 border-l-8 border-[#4096B5] ">
          Stay ahead of the curve with our comprehensive cybersecurity assessment solutions!
        </p>
      </div>
    </div>
  );
};

export default HeadSection;
