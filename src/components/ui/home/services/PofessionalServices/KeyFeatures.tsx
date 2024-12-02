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
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-teal-900 group-hover:text-teal-500 text-lg mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default KeyFeatures;