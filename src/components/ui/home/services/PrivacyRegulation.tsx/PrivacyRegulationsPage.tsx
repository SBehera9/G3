import React from 'react';
import Header from './Header';
import RegulationBox from './RegulationBox';
import Footer from '../../../../Footer';
import { motion } from 'framer-motion';
import ComplianceSection from './ComplianceSection';
import OurApproachsection from './OurApproachsection';

const PrivacyRegulationsPage: React.FC = () => {
  const regulations = [
    'General Data Protection Regulation',
    'California Consumer Protection Act',
    'Digital Personal Data Protection Act',
    'Health Insurance Portability & Accountability Act',
    'Singapore - Personal Data Protection Law',
    'Saudi Arabia - Personal Data Protection Law',
    'Qatar Financial Centre – Data Protection Regulations',
    'Dubai International Financial Centre – Data Protection Regulation',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <ComplianceSection />
      <main className="flex-1 container mx-auto p-6">
       
        <section className="mb-10 px-6 sm:px-16 md:px-24 lg:px-32">
          <h2 className="text-primary font-bold text-2xl sm:text-3xl md:text-4xl mb-4">Data Protection Regulations</h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5, 
                },
              },
            }}
          >
            {regulations.map((regulation, index) => (
              <RegulationBox
                key={index}
                title={regulation}
              />
            ))}
          </motion.div>
        </section>
      </main>
      <OurApproachsection />
      <Footer />
    </div>
  );
};

export default PrivacyRegulationsPage;
