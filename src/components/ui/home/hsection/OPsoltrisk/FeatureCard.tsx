import React from 'react';

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="relative group bg-gray-100 rounded-lg shadow-md overflow-hidden transition-all duration-300">
      <div className="absolute inset-0 bg-[#4096B5] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>

      <div className="relative z-10 p-4 sm:p-6 flex flex-col sm:flex-row items-start">
        <div className="text-[#4096B5] text-2xl sm:text-3xl mr-0 sm:mr-4 mb-4 sm:mb-0 p-3 bg-gray-100 rounded-full transition-colors duration-300">
          {icon}
        </div>
        <div className="transition-colors duration-300 group-hover:text-white">
          <h3 className="font-bold text-base sm:text-lg lg:text-xl text-[#4096B5] group-hover:text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm sm:text-base lg:text-lg text-[#4096B5] group-hover:text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
