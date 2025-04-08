import React, { useState, useEffect } from "react";
import Img from "../../../../../assets/Image/Image33.png";
import Img1 from "../../../../../assets/Image/Image34.jpg";
import Img2 from "../../../../../assets/Image/Image35.jpeg";

const Excellence: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8 space-y-16 flex flex-col items-center">
      <div className="text-center px-4">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#4096B5] mb-2 animate-slidein">
          Cybersecurity Excellence
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-54 sm:mb-6 text-center text-[#4096B5] animate-slidein">
          Our key service offerings
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#4096B5] animate-slidein">
          Our tailored solutions identify vulnerabilities and fortify your defenses against cyber threats.
        </p>
      </div>

      <div
        className={`flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8 w-full ${scrolling ? "slide-in-left" : ""}`}
      >
        <div className="relative w-full lg:w-[500px] h-auto flex items-center justify-center">
          <img
            src={Img}
            alt="Cybersecurity"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-[500px] text-center lg:text-left px-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#4096B5] mb-4">
            Gap Assessments: Your First Step to Cybersecurity Excellence
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-[#4096B5] mb-4">
            Uncover hidden vulnerabilities and unlock your organization's true cybersecurity potential.
            <br />
            <br />
            <b>Comprehensive Evaluation:</b> Assess systems, policies, and controls against global standards like ISO 27001, NIST CSF, and PCI DSS.
            <br />
            <br />
            <b>Audit & Certification Readiness:</b> Prepare your organization to meet compliance requirements with customized solutions.
          </p>
        
        </div>
      </div>

      <div
        className={`flex flex-col-reverse lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8 w-full ${scrolling ? "slide-in-right" : ""}`}
      >
        <div className="w-full lg:w-[500px] text-center lg:text-left px-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#4096B5] mb-4">
            Cybersecurity Audits: Uncover, Validate, Secure
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-[#4096B5] mb-4">
            Strengthen your defenses with a deep dive into your cybersecurity framework.
            <br />
            <br />
            <b>Controls Assessment:</b> Conduct an in-depth evaluation to uncover vulnerabilities and potential risks.
            <br />
            <br />
            <b>Regulatory Compliance Review:</b> Ensure adherence to industry standards and best practices.
          </p>
          
        </div>
        <div className="w-full lg:w-[500px] h-auto flex items-center justify-center">
          <img
            src={Img1}
            alt="Data Protection"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <div
        className={`flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8 w-full ${scrolling ? "slide-in-left" : ""}`}
      >
        <div className="w-full lg:w-[500px] h-auto flex items-center justify-center">
          <img
            src={Img2}
            alt="Resilience Solutions"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-[500px] text-center lg:text-left px-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#4096B5] mb-4">
            IS Regulations Compliance: Simplifying Complexity, Ensuring Confidence
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-[#4096B5] mb-4">
            Achieve seamless compliance with ever-evolving Information Security (IS) regulations.
            <br />
            <br />
            <b>Regulatory Mapping:</b> Align your operations with GDPR, HIPAA, and region-specific mandates across the Middle East, Europe, and the USA.
            <br />
            <br />
            <b>Tailored Compliance Frameworks:</b> Develop customized strategies to meet global standards and local laws effectively.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Excellence;
