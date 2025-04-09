import React from "react";
import ESLcard from "./ESLcard";

import Img1 from "../../../../../assets/Image/im2.jpg";
import Img2 from "../../../../../assets/Image/im2.jpg"; 

const ESL: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-64 py-6 md:py-10">
      <header className="text-left mb-8">
        <p className="text-primary font-semibold text-lg md:text-xl">EXPERT SECURITY LEADERSHIP</p>
        <h1 className="text-2xl md:text-3xl text-primary font-bold mt-2">Tailored vCISO & vDPO solutions</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <ESLcard
          title="Virtual CISO (vCISO)"
          description="Our vCISO service delivers seasoned security leadership on-demand. Whether you lack in-house expertise or need additional strategic support, our vCISOs help you develop and implement a robust information security program tailored to your organization’s needs."
          buttonText="READ MORE"
          backgroundImage={Img1}
        />
        <ESLcard
          title="Virtual DPO (vDPO)"
          description="Our vDPO service supports your organization in meeting data privacy obligations with expert guidance and oversight. Acting as your external Data Protection Officer, our vDPOs ensure compliance with global privacy regulations such as GDPR, CCPA, and more."
          buttonText="READ MORE"
          backgroundImage={Img2} 
        />
      </div>
    </div>
  );
};

export default ESL;
