import React from "react";
import PsHeader from "./PsHeader";
import ExpertSl from "./ExpertSl";
import ESL from "./ESL";
import KfGrid from "./KfGrid";

import ContactForm from "../../contactus/ContactForm";
import Footer from "../../../../Footer";

const PofessionalServices: React.FC = () => {
  return (
    <div className="font-sans">
      <PsHeader />
      <ExpertSl />
      <ESL />
      <KfGrid />

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

export default PofessionalServices;
