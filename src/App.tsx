import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Cookies from "js-cookie";

import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/pages/Home";
import AboutUs from "./components/ui/home/AboutUs/about1/AboutPage";
import Career from "./components/ui/home/AboutUs/career/Career";
import CybersecurityServicesPage from "./components/ui/home/services/cybersecurity/CybersecurityServicesPage";
import DataPrivacyFramework from "./components/ui/home/services/dataprivacy/DataPrivacyFramework";
import PrivacyRegulationsPage from "./components/ui/home/services/PrivacyRegulation.tsx/PrivacyRegulationsPage";
import PrivacyASS from "./components/ui/home/services/AssessmentsPrivacy/DataPrivacyPage";
import Cybersecurityassessment from "./components/ui/home/services/assessmentcybersecurity/Cybersecurityassessment";
import MainPage from "./components/ui/home/services/securityPrivacy/MainPage";
import SoltRisk from "./components/ui/home/hsection/OPsoltrisk/SoltRisk";
import Contact from "./components/ui/home/contactus/Contact";
import ContactForm from "./components/ui/home/contactus/ContactForm";
import PofessionalServices from "./components/ui/home/services/PofessionalServices/PofessionalServices";
import PrivacyPolicy from "./components/ui/home/privacypolicy/PrivacyPolicy";
<<<<<<< HEAD
import VAPT from "./components/ui/home/services/vapt/VAPT";
import Services from "./components/ui/home/services/Services";
=======
 import VAPT from "./components/ui/home/services/vapt/VAPT";
 import Services from "./components/ui/home/services/Services";
>>>>>>> 0bc918f8e68228610bb485ca2cb57f1045e3a0f6

const ConditionalNavbar: React.FC = () => {
  const location = useLocation();
  const hideNavbarPaths = ["/contact-form"];
<<<<<<< HEAD
  const isMobile = useMediaQuery({ maxWidth: 768 });
=======
 const isMobile = useMediaQuery({ maxWidth: 768 });
>>>>>>> 0bc918f8e68228610bb485ca2cb57f1045e3a0f6

  if (hideNavbarPaths.includes(location.pathname)) {
    return null;
  }

<<<<<<< HEAD
  return isMobile ? <NavbarMobile /> : <Navbar />;
};
=======
 return isMobile ? <NavbarMobile /> : <Navbar />;
 };
>>>>>>> 0bc918f8e68228610bb485ca2cb57f1045e3a0f6

const AppContent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
<<<<<<< HEAD
    Cookies.set("lastVisitedPage", location.pathname, { expires: 7 });
    console.log("Last Visited Page:", Cookies.get("lastVisitedPage"));
  }, [location]);

  return (
    <>
      <ConditionalNavbar />
=======
   Cookies.set("lastVisitedPage", location.pathname, { expires: 7 });
     console.log("Last Visited Page:", Cookies.get("lastVisitedPage"));
  }, [location]);

 return (
    <>
     <ConditionalNavbar />
>>>>>>> 0bc918f8e68228610bb485ca2cb57f1045e3a0f6
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services" element={<Services />} />
<<<<<<< HEAD
        <Route path="/cyber-security" element={<CybersecurityServicesPage />} />
        <Route path="/implementation" element={<DataPrivacyFramework />} />
=======
         <Route path="/cyber-security" element={<CybersecurityServicesPage />} />
         <Route path="/implementation" element={<DataPrivacyFramework />} />
>>>>>>> 0bc918f8e68228610bb485ca2cb57f1045e3a0f6
        <Route path="/privacyregulation" element={<PrivacyRegulationsPage />} />
        <Route path="/privacyass" element={<PrivacyASS />} />
        <Route path="/cybersecurityass" element={<Cybersecurityassessment />} />
        <Route path="/professional" element={<PofessionalServices />} />
        <Route path="/security-privacy" element={<MainPage />} />
        <Route path="/soltrisk" element={<SoltRisk />} />
<<<<<<< HEAD
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/vapt" element={<VAPT />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    
    <Router>
      <AppContent />
=======
       <Route path="/contact" element={<Contact />} />
       <Route path="/contact-form" element={<ContactForm />} />
         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
         <Route path="/vapt" element={<VAPT />} />
      </Routes>
    </>
 );
 };

const App: React.FC = () => {
  return {
    <Router>
     <AppContent/>
>>>>>>> 0bc918f8e68228610bb485ca2cb57f1045e3a0f6
    </Router>
  );
};

export default App;
