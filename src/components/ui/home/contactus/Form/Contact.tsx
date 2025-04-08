import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <>
    <div className="bg-black text-white py-16 px-6 md:px-32 min-h-screen gap-2 grid grid-cols-1 md:grid-cols-2 justify-between items-center">
      
      <div className="w-[100%] h-[100%] space-y-7 p-3">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Drop Us A Message <br /> For Any Query
        </h2>

        <div className="flex items-start space-x-4">
          <div className="bg-white text-black p-6 rounded-md">
            <MapPin />
          </div>
          <div>
            <p className="font-semibold text-teal-400 mt-3 text-xl">Where We Are:</p>
            <p>Chennai, India</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-white text-black p-6 rounded-md">
            <Phone />
          </div>
          <div>
            <p className="font-semibold text-teal-400 mt-3 text-xl">Phone:</p>
            <p>+91 99446 46365</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-white text-black p-6 rounded-md">
            <Mail />
          </div>
          <div>
            <p className="font-semibold text-teal-400 mt-3 text-xl">Email:</p>
            <p>info@privintech.com</p>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[100%] p-3">
      <ContactForm/>
      </div>
     
    </div>
    </>
  );
};

export default Contact;
