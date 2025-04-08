import React from "react";
import bgImg from "../../../../../assets/Image/img31.jpg";
import Imgg from "../../../../../assets/Image/Imge33.jpg";

const Header: React.FC = () => {
  return (
    <>
      
      <header className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-fixed "
        style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="w-full lg:w-2/3  lg:text-center mt-4 lg:mt-0 ml-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl  lg:text-5xl font-bold text-white mb-6 mt-4">
            Cybersecurity Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4">
            Bridging the Gap Between Risk and Resilience
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-2">
            Protect your digital assets with our cutting-edge solutions.
          </p>
        </div>
      </header>

      
      <section className="relative flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 py-12 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[565px] group">
          <img
            src={Imgg}
            alt="Advanced Solutions"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4 sm:p-6 lg:p-8 max-w-sm lg:max-w-md rounded-lg z-10 hidden group-hover:flex transition-opacity duration-300">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                Secure. Comply. Defend.
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6">
                In an era of increasing cyber threats and evolving compliance
                requirements, safeguarding your organization's digital assets is
                paramount. Our cybersecurity services provide a robust framework
                to identify vulnerabilities, ensure compliance, and fortify your
                defenses.
              </p>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
