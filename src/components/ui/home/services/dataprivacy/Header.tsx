import React from "react";
import Img from "../../../../../assets/Image/Gif3.gif";

const Header: React.FC = () => {
  return (
    <header
      className="relative min-h-[600px] flex flex-col items-center justify-center text-teal-50 text-center bg-center bg-fixed bg-cover"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-4 sm:px-8">
        Data Privacy Framework Implementation
      </h1>
      <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-10 md:px-16">
      In today’s data-driven world, safeguarding privacy is more than a regulatory requirement it’s a commitment to building trust. Our Data Privacy Framework Implementation services ensure your organization meets global and regional privacy standards, including GDPR, CCPA, DIFC DP Law, and Middle Eastern regulations, with a tailored, end-to-end approach.
      </p>
    </header>
  );
};

export default Header;
