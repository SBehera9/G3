import React from "react";

const BusinessGrowthSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-100 rounded-lg shadow-md mb-10">
      <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-54 sm:mb-6 text-primary">
        Vision
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-54 sm:mb-6 text-primary">
        Driving Business Growth Through Technology and Compliance
      </h2>
      <p className="mb-4 text-sm sm:text-base lg:text-lg">
        At G3 Cyberspace, we understand the challenges businesses face in managing data privacy, strengthening cybersecurity, and ensuring compliance with evolving regulations. Navigating these complexities can be overwhelming, even for organizations with dedicated teams.
      </p>
      <p className="mb-4 text-sm sm:text-base lg:text-lg">
        Our expertise and technology-driven solutions simplify these processes, empowering your business to:
      </p>
      <ul className="space-y-4">
        <li className="group relative bg-white shadow-sm p-4 border-l-4 border-primary overflow-hidden">
          <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></span>
          <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-500">
            <strong>Protect sensitive data:</strong> Advanced cybersecurity measures safeguard your information.
          </span>
        </li>
        <li className="group relative bg-white shadow-sm p-4 border-l-4 border-primary overflow-hidden">
          <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></span>
          <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-500">
            <strong>Stay compliant:</strong> Ensure adherence to industry regulations and global standards.
          </span>
        </li>
        <li className="group relative bg-white shadow-sm p-4 border-l-4 border-primary overflow-hidden">
          <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></span>
          <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-500">
            <strong>Reduce operational risks:</strong> Enhance trust with stakeholders and improve resilience.
          </span>
        </li>
      </ul>

      <br />
      <p className="mb-4 text-sm sm:text-base lg:text-lg">
        Partner with us to unlock growth opportunities by building a resilient, secure, and compliant organization ready to thrive in the digital age.
      </p>
    </section>
    
  );
};

export default BusinessGrowthSection;
