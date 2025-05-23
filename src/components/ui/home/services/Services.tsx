import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Consulting Services",
    description: "Cybersecurity & Data privacy",
    path: "/cyber-security" 
  },
  {
    title: "Professional Services",
    description: "vCISO & vDPO",
    path: "/professional" 
  },
  {
    title: "VAPT",
    description: "Vulnerability & Penetration testing services",
    path: "/vapt" 
  },
  {
    title: "Information Security Frameworks Implementation",
    description: "Implementation services for various global ISO standards & frameworks",
    path: "/implementation" 
  },
  {
    title: "Data Privacy Regulations Compliance",
    description: "Roadmap, frameworks & consulting for compliance with global regulations",
    path: "/privacyregulation" 
  },
  {
    title: "Cybersecurity & Compliance Tools",
    description: "Flagship tool driven with AI to ease compliance with automation",
    path: "https://soltrisk-io-e6evgfagahejbwgh.centralindia-01.azurewebsites.net",
    isExternal: true 
  },
];

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string, isExternal?: boolean) => {
    if (isExternal) {
      window.open(path, "_blank"); 
    } else {
      navigate(path); 
    }
  };

  return (
    <section className="text-800 text-primary min-h-screen flex flex-col items-center py-2 sm:py-8 md:py-2 px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-54 sm:mb-6 text-center text-800 text-primary">
        What do we offer
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleClick(service.path, service.isExternal)}
            className="group relative rounded-lg shadow-[5px_5px_5px_#80a4a4] transform transition duration-300 hover:scale-105 hover:shadow-2xl justify-center text-center items-center p-4 sm:p-6 lg:p-8 animate-slidein overflow-hidden cursor-pointer"
          >
            <span className="absolute inset-0 bg-900 bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-0 rounded-lg"></span>
            <div className="relative z-10">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-4 lg:mb-6 animate-slidein text-700 text-primary group-hover:text-white transition-colors duration-500">
                {service.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-700 text-black animate-slidein group-hover:text-white transition-colors duration-500">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;