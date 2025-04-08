import React from "react";
import Img from "../../../../../assets/Image/image23.png";
import Img1 from "../../../../../assets/Image/img25.jpg";

const AboutHeader: React.FC = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center text-teal-50 text-center bg-fixed bg-cover"
      style={{ backgroundImage: `url(${Img1})` }}
    >
      <header className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 mt-16 lg:mt-24 w-full max-w-7xl">
        <div className="flex flex-col items-center justify-center text-white px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
            About G3 Cyberspace
          </h1>
          <p className="text-base sm:text-lg lg:text-xl">
            Your Partner in <strong>Governing Global Governance (G3)</strong>
          </p>
        </div>

        <div className="flex justify-center items-center px-4 md:px-8">
          <img
            src={Img}
            alt="About G3 Cyberspace"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover border-none rounded-md"
          />
        </div>
      </header>
    </div>
  );
};

export default AboutHeader;
