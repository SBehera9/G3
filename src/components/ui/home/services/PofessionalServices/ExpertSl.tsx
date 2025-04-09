import React from "react";
import Img from "../../../../../assets/Image/im1.jpg";

const ExpertSl: React.FC = () => {
   return (
   <div className="bg-white mt-12">
        <div className="max-w-5xl mx-auto rounded-xl p-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                <div className=" mt-36">
                    <h2 className="font-bold text-3xl text-primary "> Expert security leadership</h2>
                    <p className="mt-2 text-black"> Empower your organization with expert leadership and guidance in information security and data privacy through our Virtual CISO (vCISO) and Virtual DPO (vDPO) services. These professional services are designed to provide strategic direction, ensure compliance, and strengthen your overall security and privacy framework.</p>
                </div>
                <div className="flex items-center justify-center">
                   <img src={Img} alt="My Image"/>
                </div>
            </div>
        </div>
    </div>
   );
};

export default ExpertSl;