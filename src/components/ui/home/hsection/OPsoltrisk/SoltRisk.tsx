import React from 'react';
import Header from './Header';
import ProductHighlight from './ProductHighlight';
import FeatureCard from './FeatureCard';
import { FaShieldAlt, FaTasks, FaRegCheckCircle } from 'react-icons/fa';
import Footer from '../../../../Footer';

const SoltRisk: React.FC = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'Advanced Cybersecurity',
      description: 'Protect your business from cyber threats with state-of-the-art security tools.',
    },
    {
      icon: <FaTasks />,
      title: 'Streamlined Compliance',
      description: 'Automate regulatory adherence for ISO certifications and GDPR compliance.',
    },
    {
      icon: <FaRegCheckCircle />,
      title: 'Third-Party Risk Management',
      description: 'Assess and mitigate risks from third-party vendors effectively.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ProductHighlight />
        <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-primary font-bold text-xl sm:text-2xl lg:text-3xl text-center mb-6 lg:mb-8">
            Core Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          <div className="flex justify-center items-center mt-8 sm:mt-10">
            <button
              type="button"
              onClick={() =>
                window.open(
                  'https://soltrisk-io-e6evgfagahejbwgh.centralindia-01.azurewebsites.net/',
                  '_blank'
                )
              }
              className="bg-primary text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-lg hover:bg-secondary focus:outline-none focus:ring focus:ring-primary mt-4"
            >
              Visit Our Website
            </button>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default SoltRisk;
