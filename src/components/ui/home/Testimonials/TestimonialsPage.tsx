import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import img1 from "../../../../assets/Image/c1.png";
import img2 from "../../../../assets/Image/c2.png";
import img3 from "../../../../assets/Image/c3.png";

interface Client {
  id: number;
  company: string;
  logo: string;
}

const ClientsMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [clientLogos, setClientLogos] = useState<Client[]>([]);

  const clientsData: Client[] = [
    {
      id: 1,
      company: 'TechCorp',
      logo: img1,
    },
    {
      id: 2,
      company: 'Innovate Inc',
      logo: img2,
    },
    {
      id: 3,
      company: 'Global Solutions',
      logo: img3,
    },
  ];

  useEffect(() => {
    setClientLogos([...clientsData, ...clientsData, ...clientsData, ...clientsData]);
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee || clientLogos.length === 0) return;

    const marqueeWidth = marquee.scrollWidth / 1; 
    const duration = marqueeWidth / 30; 

    let startTime: number | null = null;
    let progress = 0;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      if (!lastTimestamp) lastTimestamp = timestamp;
      
      if (!isPaused) {
        const deltaTime = timestamp - lastTimestamp;
        progress += deltaTime / (duration * 1000);
        
        if (progress >= 1) {
          progress = 0;
        }
        
        marquee.style.transform = `translateX(-${progress * 100}%)`;
      }
      
      lastTimestamp = timestamp;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [clientLogos, isPaused]);

  return (
    <div className="bg-gray-50 py-12 px-4 sm:py-16 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4096B5] mb-3 sm:mb-4">
            Our Clients
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by industry leaders worldwide
          </p>
        </div>

        <div 
          className="relative w-full overflow-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <div 
            ref={marqueeRef}
            className="flex gap-6 sm:gap-8 w-max" 
          >
            {clientLogos.map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 w-32 h-24 sm:w-44 sm:h-32 flex items-center justify-center shadow-sm hover:shadow-md transition-all"
              >
                <img
                  src={client.logo}
                  alt={`${client.company} logo`}
                  className="max-h-12 sm:max-h-16 w-auto object-contain"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-gray-500 text-sm sm:text-base">${client.company}</span>`;
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsMarquee;