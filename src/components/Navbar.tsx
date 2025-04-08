import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Image/Logo12.png";

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [nestedDropdown, setNestedDropdown] = useState<string | null>(null);
  const [nestedPrivacyDropdown, setNestedPrivacyDropdown] = useState<string | null>(null);

  const handleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
    setNestedDropdown(null); 
    setNestedPrivacyDropdown(null); 
  };

  const handleNestedDropdown = (menu: string) => {
    setNestedDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleNestedPrivacyDropdown = (menu: string) => {
    setNestedPrivacyDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[6%] py-4">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            className="h-16 w-60 transform transition duration-300 hover:scale-105"
          />
        </Link>

        <nav className="flex items-center w-auto">
          <ul className="text-base text-[#4096B5] flex justify-between">
            <li>
              <Link
                to="/"
                className="text-[18px] px-5 py-2 font-semibold transform transition duration-300 hover:scale-105 hover:text-[#4096B5] hover:uppercase"
              >
                Home
              </Link>
            </li>

            <li
              onMouseEnter={() => handleDropdown("about")}
              onMouseLeave={() => handleDropdown("about")}
              className="relative"
            >
              <Link
                to="//"
                className="text-[18px] px-5 py-2 font-semibold transform transition duration-300 hover:scale-105 hover:text-[#4096B5] hover:uppercase"
              >
                About
              </Link>
              {openDropdown === "about" && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg w-48">
                  <li>
                    <Link
                      to="/aboutus"
                      className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                    >
                      AboutUs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/career"
                      className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                    >
                      Career
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              onMouseEnter={() => handleDropdown("services")}
              onMouseLeave={() => handleDropdown('null')}
              className="relative"
            >
              <Link
                to="//"
                className="text-[18px] px-5 py-2 font-semibold transform transition duration-300 hover:scale-105 hover:text-[#4096B5] hover:uppercase"
              >
                Services
              </Link>
              {openDropdown === "services" && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg w-48">
                  <li
                    onMouseEnter={() => handleNestedDropdown("consulting")}
                    onMouseLeave={() => handleNestedDropdown('null')}
                    className="relative"
                  >
                    <Link
                      to="//"
                      className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                    >
                      Consulting Services
                    </Link>
                    {nestedDropdown === "consulting" && (
                      <ul className="absolute left-48 top-0 bg-white shadow-lg w-48">
                        <li>
                          <Link
                            to="/cyber-security"
                            className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                          >
                            Cyber Security
                          </Link>
                        </li>
                        <li
                          onMouseEnter={() => handleNestedPrivacyDropdown("data-privacy")}
                          onMouseLeave={() => handleNestedPrivacyDropdown('null')}
                          className="relative"
                        >
                          <Link
                            to="//"
                            className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                          >
                            Data Privacy
                          </Link>
                          {nestedPrivacyDropdown === "data-privacy" && (
                            <ul className="absolute left-48 top-0 bg-white shadow-lg w-48">
                              <li>
                                <Link
                                  to="/implementation"
                                  className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                                >
                                  Framework Implementation
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/privacyregulation"
                                  className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                                >
                                  Privacy Regulation
                                </Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => handleNestedDropdown("assessment")}
                    onMouseLeave={() => handleNestedDropdown('null')}
                    className="relative"
                  >
                    <Link
                      to="//"
                      className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                    >
                      Assessment
                    </Link>
                    {nestedDropdown === "assessment" && (
                      <ul className="absolute left-48 top-2 bg-white shadow-lg w-48">
                        <li>
                          <Link
                            to="/privacyass"
                            className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                          >
                            Privacy Assessments
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/cybersecurityass"
                            className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                          >
                            Cybersecurity Assessments
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link
                      to="/professional"
                      className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                    >
                      Professional Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vapt"
                      className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                    >
                      VAPT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/security-privacy"
                      className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                    >
                      Security & Privacy Standards
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              onMouseEnter={() => handleDropdown("products")}
              onMouseLeave={() => handleDropdown("products")}
              className="relative"
            >
              <Link
                to="//"
                className="text-[18px] px-5 py-2 font-semibold transform transition duration-300 hover:scale-105 hover:text-[#4096B5] hover:uppercase"
              >
                Our Products
              </Link>
              {openDropdown === "products" && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg w-48">
                  <li>
                    <Link
                      to="/soltrisk"
                      className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                    >
                      Soltrisk
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              onMouseEnter={() => handleDropdown("resources")}
              onMouseLeave={() => handleDropdown("resources")}
              className="relative"
            >
              <Link
                to="//"
                className="text-[18px] px-5 py-2 font-semibold transform transition duration-300 hover:scale-105 hover:text-[#4096B5] hover:uppercase"
              >
                Resources
              </Link>
              {openDropdown === "resources" && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg w-48">
                  <li>
                    <Link
                      to="//"
                      className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="//"
                      className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                    >
                      Policies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="//"
                      className="block px-4 py-2 text-[#4096B5] hover:text-white bg-transparent hover:bg-[#4096B5] border-l-4 border-transparent hover:border-[#4096B5]"
                    >
                      Case Studies
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/contact"
                className="text-[18px] px-5 py-2 font-semibold transform transition duration-300 hover:scale-105 hover:text-[#3ca2be] hover:uppercase"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;