import React from "react";
import img from "../../../../assets/Image/im12.png";
import img1 from "../../../../assets/Image/im14.png";
import img2 from "../../../../assets/Image/im15.png";
import img3 from "../../../../assets/Image/im17.png";
import img4 from "../../../../assets/Image/im13.png";import img5 from "../../../../assets/Image/im16.png";

const ComplianceCard: React.FC<{ title: string; image: string }> = ({ title, image }) => {
  return (
    <div className="w-full sm:w-48 h-48 border-[#4096B5] border-2 bg-white rounded-lg shadow-[5px_5px_5px_#4096B5] p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center flex flex-col items-center justify-center animate-slidein mt-0">
      <img src={image} alt={title} className="w-24 h-24 object-contain mb-4 animate-slidein"/>
      <h3 className="text-lg font-semibold text-800 text-[#4096B5] animate-slidein">{title}</h3>
    </div>
  );
};

const CompliancePage: React.FC = () => {
  const complianceData = [
    { title: "ISO 27001", image: img},
    { title: "SOC 2", image: img1},
    { title: "GDPR", image: img2},
    { title: "HIPAA", image: img3},
    { title: "PCI DSS", image: img4},
    { title: "ISO 27001", image: img5},
  ];

  return (
    <div className="min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-54 sm:mb-6 text-center text-800 text-[#4096B5] mb-4">Compliance Services</h1>
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 w-full place-items-center">
          {complianceData.map((item) => (
            <ComplianceCard key={item.title} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompliancePage;
