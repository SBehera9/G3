import React from "react";
import AboutHeader from "./AboutHeader";
import MissionSection from "./MissionSection";
import BusinessGrowthSection from "./BusinessGrowthSection";
import Footer from "../../../../Footer";

const AboutPage: React.FC = () => {
  return (
    <div>
      <AboutHeader />
      <MissionSection />
      <BusinessGrowthSection />
      <Footer/>
    </div>
  );
};

export default AboutPage;
