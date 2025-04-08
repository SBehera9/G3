import React from "react";

interface ESLcardProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string; 
}

const ESLcard: React.FC<ESLcardProps> = ({ title, description, backgroundImage }) => {
  return (
    <div className="relative py-9">
      <div
        className="h-96 bg-cover bg-center rounded-lg p-20 "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute  bg-white flex justify-center items-center text-[#4096B5] p-4">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-2">{description}</p>
          </div>
        </div>
        
      </div>

      
    </div>
  );
};

export default ESLcard;
