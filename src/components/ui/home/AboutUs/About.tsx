import React from 'react';
import Img from '../../../../assets/Image/img1.jpg';

const About: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full bg-gray-100">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 w-11/12 lg:w-10/12 gap-8 text-[#4096B5] py-16 md:py-24">
        <div className="border-[#4096B5] border-2 bg-[white] rounded-lg shadow-md p-6 sm:p-8 transform transition duration-300 hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 text-center">
            About Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center text-black">
            At G3 Cyberspace, we specialize in empowering businesses with comprehensive solutions in cybersecurity, data privacy, and regulatory compliance.
            With our expertise spanning consulting, assessments, and professional services, we help organizations confidently navigate the complex landscape of
            digital security and compliance standards.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={Img}
            alt="About Us"
            className="w-full sm:w-3/4 md:w-full lg:w-10/12 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
