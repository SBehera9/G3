import React from "react";
import Img from "../../../../assets/Image/img2.jpg";

const HeroSection: React.FC = () => {
  return (
    <div  className="relative min-h-screen items-center  text-teal-50 text-center bg-center flex item-center justify-center bg-fixed bg-cover"
    style={{ backgroundImage: `url(${Img})` }}>
      <div className="text-center max-w-6xl">
        <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold mb-4 animate-slidein">
          Take the first step towards building a 
          <br/>secure, compliant, and trusted business.
        </h1>
        <p className="text-lg md:text-xl mb-6 mt-24 animate-slidein">
          Book your free consultation today!
        </p>
        <button
              type="button"
              onClick={() => window.open('', '_blank')}
              className="bg-white text-[#4096B5] px-6 py-2 rounded-lg hover:bg-[#4096B5] hover:text-white focus:outline-none focus:ring focus:ring-[#2471a3] mt-2">
              Book now
            </button>
      </div>
    </div>
  );
};

export default HeroSection;
