import React from 'react';
import Img from "../../../../../assets/Image/img31.jpg";

const Header: React.FC = () => {
  return (
    <header 
      className="relative min-h-[600px] flex items-center justify-center text-primary text-center bg-center bg-fixed bg-cover"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="container mx-auto px-6 py-12 sm:px-8 sm:py-16 md:px-10 lg:px-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4 sm:px-8">
          Privacy Regulations Compliance
        </h1>
        <h2 className="text-lg sm:text-xl md:text-6xl lg:text-3xl font-light mt-4">
          Navigating complexity with confidence.
        </h2>
      </div>
    </header>
  );
};

export default Header;
