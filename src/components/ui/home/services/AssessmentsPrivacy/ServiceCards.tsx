import React from "react";

const services = [
  {
    title: "Regulatory Assessments",
    description: "Assess your organization’s compliance with privacy regulations such as GDPR, CCPA, HIPAA, and others. We help you understand your obligations and align your practices with the latest legal requirements.",
  },
  {
    title: "Gap Assessments",
    description: "Identify discrepancies between your current practices and industry standards or regulatory expectations. Our detailed gap analysis highlights areas for improvement to ensure full compliance and operational efficiency.",
  },
  {
    title: "Privacy Risk Assessments",
    description: "Evaluate risks to sensitive data across your operations. We use a risk-based approach to prioritize actions, mitigate vulnerabilities, and safeguard personal data.",
  },
  {
    title: "Product Assessments",
    description: "Ensure your products are privacy-compliant by design. From development to deployment, we assess privacy impacts and offer recommendations to integrate data protection into your product lifecycle.",
  },
];

const ServiceCards: React.FC = () => {
  return (
    <div className="bg-white py-8 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 justify-center items-center border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-primary text-xl sm:text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-black text-base sm:text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
