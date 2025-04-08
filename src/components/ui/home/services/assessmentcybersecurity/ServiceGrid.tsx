import React from "react";

const services = [
  {
    title: "Advisory Services",
    description: "Our cybersecurity assessment & advisory support offers actionable recommendations to enhance the value of your IT and security environment.",
  },
  {
    title: "SOC Assessment",
    description: "Our SOC Assessment optimizes your Security Operation Center by evaluating processes and technology to enhance threat detection and incident response.",
  },
  {
    title: "Vulnerability Assessment",
    description: "Our Vulnerability Assessment identifies and rectifies weaknesses in your network infrastructure, systems, and detailed evaluations.",
  },
  {
    title: "Third-Party Risk Management (TPRM)",
    description: "Our Third-Party Risk Management services evaluate vendor security practices, identify vulnerabilities, and ensure compliance to protect your supply chain.",
  },
];

  const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
      <div className="bg-white rounded-xl p-7 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
        <div className="">
          <h3 className="text-xl font-bold text-[#4096B5]">{title}</h3>
        </div>
        <div className="border-2 rounded-xl p-4 mt-3 hover:bg-[#4096B5] ">
          <p className="mt-2 text-[#4096B5] hover:text-[white]">{description}</p>
        </div>
      </div>
    );
  };


const ServiceGrid: React.FC = () => {
  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto p-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
