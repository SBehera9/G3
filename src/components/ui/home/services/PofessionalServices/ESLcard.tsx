import React from "react";

interface ESLcardProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string; // The image path passed as a prop
}

const ESLcard: React.FC<ESLcardProps> = ({ title, description, backgroundImage }) => {
  return (
    <div className="relative py-9">
      {/* Image container */}
      <div
        className="h-96 bg-cover bg-center rounded-lg p-20 "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay text */}
        <div className="absolute  bg-white flex justify-center items-center text-teal-800 p-4">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-2">{description}</p>
            {/* <button className="mt-6 bg-teal-600 font-semibold">{buttonText}</button> */}
          </div>
        </div>
        
      </div>

      {/* Button section */}
      
    </div>
  );
};

export default ESLcard;
