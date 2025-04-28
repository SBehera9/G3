import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; 
import logo from '../assets/Image/Logo12.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-primary py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="md:col-span-1">
          <img
            src={logo}
            alt="Company Logo"
            className="w-32 h-auto mb-4"
          />
          <p className="font-semibold">Follow Us</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-300 hover:text-secondary">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-300 hover:text-secondary">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-300 hover:text-secondary">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-300 hover:text-secondary">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Know More</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-300 hover:text-secondary">Home</Link></li>
            <li><Link to="//" className="hover:text-300 hover:text-secondary">Startup Solutions</Link></li>
            <li><Link to="//" className="hover:text-300 hover:text-secondary">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-300 hover:text-secondary">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-300 hover:text-secondary">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Automations</h3>
          <ul className="space-y-2">
            <li><Link to="/implementation" className="hover:text-300 hover:text-secondary">Framework</Link></li>
            <li><Link to="//" className="hover:text-300 hover:text-secondary">TPRM</Link></li>
            <li><Link to="/privacyregulation" className="hover:text-300 hover:text-secondary">Data Privacy</Link></li>
            <li><Link to="//" className="hover:text-300 hover:text-secondary">Customer Centric</Link></li>
            <li><Link to="//" className="hover:text-300 hover:text-secondary">Compliance (c3)</Link></li>
            <li><Link to="//" className="hover:text-300 hover:text-secondary">Statutory Compliance</Link></li>
            <li><Link to="//" className="hover:text-300 hover:text-secondary">Risk Management</Link></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Frameworks</h3>
          <ul className="space-y-2">
            <li><Link to="/security-privacy" className="hover:text-300 hover:text-secondary">ISO 27001</Link></li>
            <li><Link to="/security-privacy" className="hover:text-300 hover:text-secondary">ISO 27701</Link></li>
            <li><Link to="/security-privacy" className="hover:text-300 hover:text-secondary">SOC 2</Link></li>
            <li><Link to="/security-privacy" className="hover:text-300 hover:text-secondary">HIPAA</Link></li>
            <li><Link to="/security-privacy" className="hover:text-300 hover:text-secondary">PCI-DSS</Link></li>
            <li><Link to="/security-privacy" className="hover:text-300 hover:text-secondary">GDPR</Link></li>
            <li><Link to="/security-privacy" className="hover:text-300 hover:text-secondary">ISO 42001</Link></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Reach Us</h3>
          
          <p>Email us: <a href="mailto:sales@soltrisk-io" className="hover:text-300 hover:text-secondary curser-pointer">info@g3cyberspace.com</a></p>
        </div>

      </div>

      <div className="border-t border-primary mt-8 pt-4">
        <p className="text-center">&copy; 2024 CYBER SPACE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
