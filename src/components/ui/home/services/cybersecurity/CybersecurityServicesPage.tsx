import React from "react";
import Header from "./Header";
import Footer from "../../../../../components/Footer";
import Excellence from "./Excellence";
import ContactForm from "../../contactus/Form/ContactForm";

const CybersecurityServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Excellence />
      </main>
      <div className="grid grid-cols-2 bg-black p-10">
      <div></div>  
      <ContactForm />
      </div> 
      <Footer />
    </div>
  );
};

export default CybersecurityServicesPage;
