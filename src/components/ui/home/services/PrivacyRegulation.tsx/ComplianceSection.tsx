import React, { useEffect } from "react";
import Img from "../../../../../assets/Image/Image46.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const ComplianceSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: true, 
    });
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 lg:px-32 bg-white py-12">
  
      <div
        className="flex-1"
        data-aos="fade-right"
      >
        <img
          src={Img}
          alt="Privacy Compliance"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      <div
        className="flex-1 text-center md:text-left"
        data-aos="fade-left" 
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-800 mb-4">
          Empowering Businesses with Comprehensive Privacy Compliance Solutions
        </h3>
        <p className="text-teal-600 text-sm sm:text-base leading-6">
          With increasingly stringent privacy laws and heightened consumer
          expectations, compliance with global and regional data protection
          regulations has become essential for businesses. Our Privacy
          Regulations Compliance services help your organization meet legal
          requirements while promoting a culture of trust, accountability, and
          transparency.
        </p>
      </div>
    </section>
  );
};

export default ComplianceSection;
