import React from "react";
import img from "../../../../../assets/Image/im19.jpg";

const ExpertiseSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-12 md:px-20 lg:px-32 xl:px-56 py-20 md:py-32 lg:py-44">
      <div className="flex flex-col justify-center">
        <h2 className="text-base sm:text-lg font-bold text-[#4096B5] uppercase mb-4 animate-slidein">
          Our Expertise
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#4096B5] leading-relaxed mb-6 animate-slidein">
          At G3 Cyberspace, we empower organizations to improve their security and privacy standards.
          Our experts specialize in implementing global frameworks like ISO 27001, ISO 45001, PCI DSS,
          ISO 9001, ISO 27701, HIPAA, SOC 2, and GDPR. We help you enhance your processes, achieve excellence,
          and build trust with your stakeholders. Let us handle the complexities of compliance, so you can
          protect your data and strengthen your reputation in today’s digital world.
        </p>
        <a
          href="#contact"
          className="text-[#4096B5] hover:text-[#4096B5] font-medium text-sm sm:text-base md:text-lg underline animate-slidein"
        >
          Get in touch
        </a>
      </div>
      <div className="flex justify-center items-center bg-[#0000003d]">
        <img
          src={img}
          alt="Office Environment"
          className="object-cover  rounded-lg"
        />
      </div>
    </div>
  );
};

export default ExpertiseSection;
