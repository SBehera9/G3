import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="group relative   rounded-lg shadow-[5px_5px_5px_#80a4a4] transform transition duration-300 hover:scale-105 hover:shadow-2xl justify-center text-center items-center p-5 animate-slidein overflow-hidden">
      
      <span className="absolute inset-0 bg-[#4096B5] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-0 rounded-lg"></span>
      
      
      <div className="relative z-10">
        <h2 className="text-3xl font-semibold mb-4 animate-slidein text-[#4096B5] group-hover:text-white transition-colors duration-500">
          {title}
        </h2>
        <p className="text-[#4096B5] text-[20px] animate-slidein group-hover:text-white transition-colors duration-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
