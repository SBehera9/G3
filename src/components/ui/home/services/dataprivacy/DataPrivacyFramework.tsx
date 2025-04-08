import React from "react";
import Header from "./Header";
import Footer from "../../../../Footer";
import PrivacySolutions from "./PrivacySolutions";
import ContactForm from "../../contactus/Form/ContactForm";

const DataPrivacyFramework: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PrivacySolutions />
      <div className="w-full bg-black">
        <div className="flex flex-col sm:flex-row px-6 sm:px-16 lg:px-32 py-6">
          <div className="flex-1 mb-6 sm:mb-0">
            <h2 className="text-3xl font-bold text-white">Get in touch</h2>
          </div>
          <ContactForm bgClassName="bg-transparent" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataPrivacyFramework;
