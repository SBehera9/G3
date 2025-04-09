import React from "react";
import Img from "../../assets/Image/Background.jpg";
import About from "../ui/home/AboutUs/About";
import Services from "../ui/home/services/Services";
import CompliancePage from "../ui/home/Compliance/ComplianceCard";
import HeroSection from "../ui/home/hsection/HeroSection";
import Footer from "../Footer";
import TestimonialsPage from "../ui/home/Testimonials/TestimonialsPage";

const Home: React.FC = () => {
  return (
    <div className="bg-white !scroll-smooth">
      <div
        className="relative flex items-center justify-start h-screen sm:h-[75vh] md:h-[85vh] lg:h-[600px] bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${Img})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div> 
        
        <div className="container mx-auto px-4 relative z-10 mt-16 md:mt-24"> 
          <div className="max-w-2xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug md:leading-normal">
              Empower your business to thrive securely in a world of digital trust and robust cybersecurity
            </h1>
          </div>
        </div>
      </div>

      <About />
      <Services />
      <CompliancePage />
      <TestimonialsPage />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;