import React from 'react';
import Img from "../../../../../assets/Image/Gif3.gif";

const FrameworkPage: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div
        className="relative min-h-screen flex items-center justify-center text-teal-50 text-center bg-fixed bg-cover"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <div className="text-white px-4 sm:px-8 md:px-12 lg:px-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Framework Implementation Services
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
            Seamless Implementation Services for Compliance and Security Frameworks
          </p>
          <button className="mt-6 px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-3 bg-[#4096B5] text-white text-sm sm:text-base md:text-lg font-medium rounded-md hover:bg-teal-600">
            View Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameworkPage;
