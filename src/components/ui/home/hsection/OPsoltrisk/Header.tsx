import React from 'react';
import Img from "../../../../../assets/Image/img29.jpg";

const Header: React.FC = () => {
  return (
    <header
      className="relative min-h-[600px] flex items-center justify-center text-teal-50 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">SoltRisk</h1>
      </div>
    </header>
  );
};

export default Header;
