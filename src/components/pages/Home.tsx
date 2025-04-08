import React from "react";
import Img from "../../assets/Image/it.gif";
import About from "../ui/home/AboutUs/About";
import Services from "../ui/home/services/Services";
import CompliancePage from "../ui/home/Compliance/ComplianceCard";
import HeroSection from "../ui/home/hsection/HeroSection";
// import Contact from "../ui/home/contactus/Contact";
import Footer from "../Footer";

// import Drop from "../ui/v/drop";

const Home: React.FC = () => {
  return (
    <html lang="en" className="bg-white !scroll-smooth">
      <div
        className="relative flex items-center justify-center text-center bg-cover bg-fixed h-screen sm:h-[75vh] md:h-[85vh] lg:h-screen"
        style={{ backgroundImage: `url(${Img})` }}>
        <div className="px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-relaxed text-white">
            Empower your business to thrive securely in a
            <br />
            world of digital trust and robust cybersecurity
          </h1>
        </div>
      </div>

      
      <About />
      <Services />
      <CompliancePage />
      <HeroSection />
      {/* <Contact /> */}
      {/* <Drop /> */}
      <Footer />
    </html>
  );
};

export default Home;
