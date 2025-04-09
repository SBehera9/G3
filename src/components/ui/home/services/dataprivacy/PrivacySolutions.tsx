import React from "react";

import image1 from "../../../../../assets/Image/Image40.png"; 
import image2 from "../../../../../assets/Image/Image41.png"; 
import image3 from "../../../../../assets/Image/Image42.png"; 
import image4 from "../../../../../assets/Image/Image43.png"; 
import image5 from "../../../../../assets/Image/Image44.jpeg"; 
import image6 from "../../../../../assets/Image/Image45.jpg"; 

const PrivacySolutions: React.FC = () => {
  const cardData = [
    {
      title: "Privacy readiness assessments",
      description:
        "Discover gaps in your data privacy practices and gain clear, actionable plans to address vulnerabilities and enhance compliance.",
      buttonText: "READ MORE",
      image: image1,
    },
    {
      title: "Custom framework development",
      description:
        "Build a privacy framework tailored to your business operations and industry standards, ensuring seamless integration and compliance.",
      buttonText: "READ MORE",
      image: image2,
    },
    {
      title: "Third-Party privacy risk management",
      description:
        "Assess and mitigate privacy risks associated with vendors and partners, ensuring third-party agreements align with your organizational standards.",
      buttonText: "READ MORE",
      image: image3,
    },
    {
      title: "Policy and Process Creation",
      description:
        "Develop and implement robust privacy policies, customized to meet regulatory requirements effectively.",
      buttonText: "READ MORE",
      image: image4,
    },
    {
      title: "Data Lifecycle Management",
      description:
        "Securely manage personal data at every stage—collection, storage, sharing, and disposal—to ensure compliance and minimize risks.",
      buttonText: "READ MORE",
      image: image5,
    },
    {
      title: "Workforce Privacy Integration",
      description:
        "Empower your team with essential tools and strategies to integrate privacy into your organizational culture and daily operations.",
      buttonText: "READ MORE",
      image: image6,
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <div className="text-left mb-12">
        <p className="text-sm font-bold text-primary uppercase">
          Privacy Solutions
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-2">
          Empowering compliance and trust
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden group relative"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-opacity duration-300 group-hover:opacity-70"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-6 md:p-8 text-center space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-white">
                {card.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacySolutions;
