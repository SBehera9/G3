import React from "react";
import Img from "../../../../../assets/Image/img30.jpg";
import img1 from "../../../../../assets/Image/im9.jpg";
import img2 from "../../../../../assets/Image/im10.jpg";
import img3 from "../../../../../assets/Image/im11.jpg";
import Footer from "../../../../Footer";
import ContactForm from "../../contactus/Form/ContactForm";

const VAPT: React.FC = () => {
    return ( 
       <div>
            <div
            className="flex items-center justify-center"
            style={{ backgroundImage: `url(${Img})` }}>
            <div className="bg-black w-full bg-opacity-50 h-full flex flex-col md:flex-row items-center justify-center text-white py-8 px-4 sm:px-8 md:px-16 lg:px-32">
                
                <div className="text-center mb-8 md:mb-0 md:mr-8 mt-16 sm:mt-8 md:mt-1 lg:mt-16">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    VULNERABILITY<br />ASSESSMENT AND<br />PENETRATION TESTING
                </div>
                </div>

               
                <div className="w-[100%] sm:w-[50%] sm:mt-8 md:mt-12 lg:mt-16">
                <ContactForm />
                </div>
                </div>
                </div>


            <div className="flex flex-col justify-center items-center px-4 sm:px-16 md:px-32 lg:px-56 py-16 sm:py-24 md:py-32">
               <div className="text-left w-full px-4 md:px-40">
                <h1 className="text-[#4096B5] font-bold text-sm sm:text-base md:text-lg animate-slidein">ABOUT</h1>
                <h2 className="text-[#4096B5] text-xl sm:text-2xl mt-3 animate-slidein">Why Do You Need VAPT?</h2>
                <p className="mt-3 text-base sm:text-lg md:text-xl text-[#4096B5] animate-slidein">
                    In today’s digital landscape, cyber threats are evolving rapidly, putting your critical assets and data at risk. Vulnerability Assessment and Penetration Testing (VAPT) helps identify and fix security gaps before attackers can exploit them. It safeguards your business from data breaches, ensures regulatory compliance, and builds trust with customers. Proactively strengthen your defenses and stay ahead of threats with expert VAPT services. <b className="text-[#4096B5] font-semibold">Secure your organization today!</b>
                </p>
               </div>
            </div>

            <div className="bg-gray-200 py-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-16 md:px-32">
                    <div className="text-left mb-10">
                        <h1 className="text-[#4096B5] animate-slidein">VAPT SERVICES</h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4096B5] animate-slidein">
                            Stay Ahead of Threats – Secure, Assess, Protect with Expert VAPT Services!
                        </h2>
                    </div>
                    
                    <div className="bg-transparent overflow-hidden mb-8">
                        <img
                            src={img1}
                            alt="Penetration Testing"
                            className="w-full h-auto object-cover animate-slidein"
                        />
                        <div className="p-6">
                            <h2 className="text-xl sm:text-2xl font-semibold text-[#4096B5] mb-4 animate-slidein">
                                Penetration Testing: Secure Your Business Against Cyber Threats
                            </h2>
                            <p className="text-[] mb-4 animate-slidein">
                                Penetration Testing is a simulated cyberattack that helps identify weaknesses in your IT systems, networks, and applications. It’s your first line of defense to prevent breaches, protect data, and ensure compliance with security standards.
                            </p>
                            <p className="text-[] mt-4 animate-slidein">Types of Penetration Testing :</p>
                            <ul className="list-none text-[]">
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Internal/Infrastructure Testing</b></li>
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Web Application Testing</b></li>
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Wireless Network Testing</b></li>
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Mobile Application Testing</b></li>
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Build and Configuration Review Testing</b></li>
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Social Engineering Testing</b></li>
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Cloud Penetration Testing</b></li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-transparent overflow-hidden mb-8">
                        <img
                            src={img2} 
                            alt="Vulnerability Assessment"
                            className="w-full h-auto object-cover animate-slidein"
                        />
                        <div className="p-6">
                            <h2 className="text-xl sm:text-2xl font-semibold text-[#4096B5] mb-4 animate-slidein">
                                Vulnerability Assessment
                            </h2>
                            <p className="text-[] mb-4 animate-slidein">
                                Vulnerability Assessment is a systematic approach to identifying, analyzing, and prioritizing security weaknesses in your IT environment. It helps organizations proactively address risks, ensure compliance, and strengthen their security posture.
                            </p>
                            <ul className="list-disc list-inside text-[]">
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Network Vulnerability Assessment</b></li>
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Application Vulnerability Assessment</b></li>
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Cloud Infrastructure Security Assessment</b></li>
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>IoT and Embedded Systems Vulnerability Assessment</b></li>
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Database Vulnerability Assessment</b></li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-transparent overflow-hidden">
                        <img
                            src={img3}
                            alt="Phishing Assessments"
                            className="w-full h-auto object-cover animate-slidein"
                        />
                        <div className="p-6">
                            <h2 className="text-xl sm:text-2xl font-semibold text-[#4096B5] mb-4 animate-slidein">Phishing Assessments</h2>
                            <p className="text-[] animate-slidein">
                                Phishing assessments are simulated social engineering exercises designed to evaluate your organization's susceptibility to phishing attacks. These assessments mimic real-world phishing attempts to identify vulnerabilities in employee awareness, response, and organizational security practices. By testing and educating your team, phishing assessments help reduce the risk of successful attacks and data breaches.
                            </p>
                            <h1 className="text-[] mt-4 animate-slidein">Types of Phishing Simulations :</h1>
                            <ul className="list-disc list-inside text-[] animate-slidein">
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Email Phishing</b></li>
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Spear Phishing</b></li>
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Vishing</b></li>
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Smishing</b></li>
                                <li className="flex items-center before:content-['o'] before:mr-2 before:text-[] animate-slidein"><b>Business Email Compromise (BEC)</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
       </div>
    );
}

export default VAPT;
