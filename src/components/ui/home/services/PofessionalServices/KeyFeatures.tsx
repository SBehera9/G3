import React from "react";

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const KeyFeatures: React.FC<FeatureCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="group bg-white shadow-md rounded-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={imageSrc}
        alt={title}
        className="h-48 w-full object-cover sm:h-60 md:h-72 lg:h-80"
      />
      <div className="p-4">
        <h3 className="font-bold text-[#4096B5] group-hover:text-[#4096B5] text-lg sm:text-xl md:text-2xl mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-black">
          {description}
        </p>
      </div>
    </div>
  );
};

export default KeyFeatures;
