import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CollapsibleSection: React.FC = () => {
  const items = [
    {
      title: "Gap assessments",
      description: "Evaluate your current practices to identify compliance gaps.",
    },
    {
      title: "Privacy framework development",
      description: "Create a custom framework that aligns with your business needs.",
    },
    {
      title: "Policy and process implementation",
      description: "Establish actionable policies for secure data management.",
    },
    {
      title: "Operational Integration",
      description: "Embed privacy practices into your daily workflows for sustainable compliance.",
    },
    {
      title: "Assessment & Support",
      description: "Conduct a comprehensive review to validate compliance readiness, ensuring all privacy measures are effectively implemented.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true,
    });
  }, []);

  return (
    <div className="flex justify-center p-4">
      
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-4">
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#4096B5]"
          data-aos="fade-up" 
        >
          Our Approach
        </h2>
        
        
        {items.map((item, index) => (
          <div key={index} className="border-b border-gray-300 mb-4">
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => toggleItem(index)}
              data-aos="fade-in" 
            >
              <h4 className="text-lg sm:text-xl md:text-1xl font-bold text-[#4096B5]">{item.title}</h4>
            </div>
            {openIndex === index && (
              <p
                className="text-[#4096B5] font-semibold text-base sm:text-lg md:text-xl py-2"
                data-aos="fade-up" 
              >
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollapsibleSection;
