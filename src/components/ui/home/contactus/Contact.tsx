import React from "react";
import { MapPin, Mail } from "lucide-react";
import ContactForm from "./ContactForm";
import Footer from "../../../Footer";

const Contact: React.FC = () => {
  return (
    <>
      <div className="bg-black text-white pt-32 pb-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 min-h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Drop Us A Message <br /> For Any Query
            </h2>

            <div className="flex items-start space-x-4">
              <div className="bg-white text-black p-4 rounded-md">
                <MapPin />
              </div>
              <div>
                <p className="font-semibold text-[#4096B5] text-lg">Where We Are:</p>
                <p>Chennai, India</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white text-black p-4 rounded-md">
                <Mail />
              </div>
              <div>
                <p className="font-semibold text-[#4096B5] text-lg">Email:</p>
                <p>info@g3cyberspace.com</p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;