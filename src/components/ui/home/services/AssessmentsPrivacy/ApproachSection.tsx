import React, { useState } from "react";

const ApproachSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      title: "Planning and Understanding",
      description: "We begin by aligning with your goals and establishing a clear roadmap for success.",
    },
    {
      id: 2,
      title: "Kick-Off",
      description:
        "Launching the project with structured coordination and defined roles to ensure a strong start.",
    },
    {
      id: 3,
      title: "Gathering and Testing",
      description:
        "Collecting necessary data, validating processes, and rigorously testing to ensure quality and reliability.",
    },
    {
      id: 4,
      title: "Reporting",
      description:
        "Delivering actionable insights and comprehensive updates to keep you informed every step of the way.",
    },
  ];

  return (
    <div className="bg-transparent py-12">
      <div className="max-w-7xl mx-auto text-center mb-8 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl sm:text-4xl text-[#4096B5] font-bold mb-4">Our Approach</h2>
        <p className="text-black text-lg sm:text-xl max-w-3xl mx-auto">
          We focus on understanding your objectives from the outset, tailoring our process to support your vision and
          prepare for critical milestones ahead. Collaboration, clear communication, and strategic planning are integral
          to how we work, ensuring each project progresses efficiently and effectively.
        </p>
      </div>

      <div className="flex justify-center items-center relative mb-12 px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                onClick={() => setActiveStep(step.id)} 
                className={`w-10 h-10 rounded-full ${
                  activeStep === step.id ? "bg-[#4096B5] text-white" : "bg-gray-300 text-gray-600"
                } flex justify-center items-center font-bold text-lg cursor-pointer`}
              >
                {step.id}
              </div>

              {index < steps.length - 1 && (
                <div className="w-12 h-1 bg-gray-300 mx-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {steps
          .filter((step) => step.id === activeStep) 
          .map((step) => (
            <div key={step.id} className="border-b-2 pb-4 mb-4 shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#4096B5] mb-3">{step.title}</h3>
                <p className="text-black text-base sm:text-lg">{step.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ApproachSection;
