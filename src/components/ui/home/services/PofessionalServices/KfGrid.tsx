import React from "react";
import KeyFeatures from "./KeyFeatures";

import img1 from "../../../../../assets/Image/im3.jpg";
import img2 from "../../../../../assets/Image/im4.jpg";
import img3 from "../../../../../assets/Image/im5.jpg";
import img4 from "../../../../../assets/Image/im6.jpg";
import img5 from "../../../../../assets/Image/im7.jpg";
import img6 from "../../../../../assets/Image/im8.jpg";

const features = [
  {
    imageSrc: img1,
    title: "Strategic Leadership",
    description:
      "Expert guidance to develop and implement tailored security and privacy strategies aligned with business objectives.",
  },
  {
    imageSrc: img2,
    title: "Regulatory Compliance",
    description:
      "Ensuring adherence to global standards and regulations such as GDPR, CCPA, and industry-specific requirements.",
  },
  {
    imageSrc: img3,
    title: "Risk Assessment and Management",
    description:
      "Identifying, assessing, and mitigating risks to strengthen your organization's security and privacy posture.",
  },
  {
    imageSrc: img4,
    title: "Policy and Governance Development",
    description:
      "Establishing robust policies, frameworks, and controls for effective management and compliance.",
  },
  {
    imageSrc: img5,
    title: "Incident Response Support",
    description:
      "Providing expertise to handle and recover from security and privacy incidents efficiently.",
  },
  {
    imageSrc: img6,
    title: "Audit Readiness and Support",
    description:
      "Preparing for internal and external audits with thorough documentation and process optimization.",
  },
];

const KfGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left text-[#4096B5]">
        Key Features of Our Services
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <KeyFeatures
            key={index}
            imageSrc={feature.imageSrc}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default KfGrid;
