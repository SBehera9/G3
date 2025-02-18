import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons
import logo from '../assets/Image/img4.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-700 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Left Section: Logo and Social Media Links */}
        <div className="md:col-span-1">
          <img
            src={logo}
            alt="Company Logo"
            className="w-32 h-auto mb-4"
          />
          <p className="font-semibold">Follow Us</p>
          <div className="flex space-x-4 mt-4">
            {/* Social media icons */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Center Section: 'Know More' Links */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Know More</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="//" className="hover:text-gray-300">Startup Solutions</Link></li>
            <li><Link to="//" className="hover:text-gray-300">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Right Section: 'Automations' Links */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Automations</h3>
          <ul className="space-y-2">
            <li><Link to="/implementation" className="hover:text-gray-300">Framework</Link></li>
            <li><Link to="//" className="hover:text-gray-300">TPRM</Link></li>
            <li><Link to="/privacyregulation" className="hover:text-gray-300">Data Privacy</Link></li>
            <li><Link to="//" className="hover:text-gray-300">Customer Centric</Link></li>
            <li><Link to="//" className="hover:text-gray-300">Compliance (c3)</Link></li>
            <li><Link to="//" className="hover:text-gray-300">Statutory Compliance</Link></li>
            <li><Link to="//" className="hover:text-gray-300">Risk Management</Link></li>
          </ul>
        </div>

        {/* Bottom Section: 'Frameworks' Links */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Frameworks</h3>
          <ul className="space-y-2">
            <li><Link to="/security-privacy" className="hover:text-gray-300">ISO 27001</Link></li>
            <li><Link to="/security-privacy" className="hover:text-gray-300">ISO 27701</Link></li>
            <li><Link to="/security-privacy" className="hover:text-gray-300">SOC 2</Link></li>
            <li><Link to="/security-privacy" className="hover:text-gray-300">HIPAA</Link></li>
            <li><Link to="/security-privacy" className="hover:text-gray-300">PCI-DSS</Link></li>
            <li><Link to="/security-privacy" className="hover:text-gray-300">GDPR</Link></li>
            <li><Link to="/security-privacy" className="hover:text-gray-300">ISO 42001</Link></li>
          </ul>
        </div>

        {/* Reach Us Section */}
        <div className="md:col-span-1">
          <h3 className="font-bold text-xl mb-4">Reach Us</h3>
          {/* <h4 className="font-semibold text-lg mb-2">Our Address</h4>
          <address className="not-italic mb-4">
            Millenia Business Park, Phase two, Campus 3A,<br />
            2nd Floor, Dr M.G.R Main Road, Kandhanchavadi,<br />
            Perungudi, 600096
          </address> */}
          <p>Email us: <a href="mailto:sales@soltrisk-io" className="hover:text-gray-300">info@g3cyberspace.com</a></p>
        </div>

      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center">&copy; 2024 CYBER SPACE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
