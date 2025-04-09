import React from "react";
import Header from "./Header";
import Footer from "../../../../../components/Footer";
import Excellence from "./Excellence";
import ContactForm from "../../contactus/ContactForm";

const CybersecurityServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Excellence />
      </main>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 sm:p-10">
          <div className="flex items-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#4096B5]">
              Get in touch
            </h2>
          </div>
          <div className="shadow-lg rounded-xl p-4 bg-white">
            <ContactForm />
          </div>
        </div> 
      <Footer />
    </div>
  );
};

export default CybersecurityServicesPage;
