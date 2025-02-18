import React from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../../../../assets/Image/img30.jpg";

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToForm = () => {
    navigate("/contact-form"); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-8 md:pt-16 lg:pt-24 " 
    style={{ backgroundImage: `url(${Img})` }}>
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12 max-w-md sm:max-w-lg md:max-w-4xl w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-teal-600 mb-4 sm:mb-6">
          Contact Us
        </h1>

        {/* <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
            Our Office
          </h2>
          <p className="text-sm sm:text-base md:text-lg">1234 Elm Street, Suite 567</p>
          <p className="text-sm sm:text-base md:text-lg">Cityville, State 12345</p>
        </div> */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
            Get in Touch
          </h2>
          {/* <p className="text-sm sm:text-base md:text-lg">
            Phone:{" "}
            <a href="tel:+1234567890" className="text-teal-600 hover:underline">
              +1-234-567-890
            </a>
          </p> */}
          <p className="text-sm sm:text-base md:text-lg">
            Email:{" "}
            <a href="mailto:info@company.com" className="text-teal-600 hover:underline">
             info@g3cyberspace.com
            </a>
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-4">
            For further information, please fill out the form below
          </p>
          <button
            onClick={handleNavigateToForm}
            className="bg-teal-600 text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-300"
          >
            Fill This Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
