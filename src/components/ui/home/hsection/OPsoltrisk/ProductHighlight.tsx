import React from 'react';

const ProductHighlight: React.FC = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[#4096B5] font-bold text-xl sm:text-2xl lg:text-3xl mb-4">
          Why Choose SoltRisk?
        </h2>
        <p className="text-black text-sm sm:text-base lg:text-lg max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
          SoltRisk is an advanced compliance and cybersecurity platform designed to streamline regulatory adherence and risk management. It empowers businesses with automated solutions for ISO certifications, GDPR compliance, and third-party risk assessments.
        </p>
      </div>
    </section>
  );
};

export default ProductHighlight;
