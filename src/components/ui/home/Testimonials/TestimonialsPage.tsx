import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import img1 from "../../../../assets/Image/c1.png"
import img2 from "../../../../assets/Image/c2.png"
import img3 from "../../../../assets/Image/c3.png"

interface Client {
  id: number;
  company: string;
  logo: string;
}

const ClientsMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
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
    setClientLogos([...clientsData, ...clientsData]);
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee || clientLogos.length === 0) return;

    const marqueeWidth = marquee.scrollWidth / 1; 
    const duration = marqueeWidth / 80; 

    let startTime: number | null = null;
    let progress = 0;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      if (!lastTimestamp) lastTimestamp = timestamp;
      
      if (!isPaused) {
        const deltaTime = timestamp - lastTimestamp;
        progress += deltaTime / (duration * 1000);
        progress %= 1;
        
        marquee.style.transform = `translateX(-${progress * 100}%)`;
      }
      
      lastTimestamp = timestamp;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [clientLogos, isPaused]);

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-54 sm:mb-6 text-center text-800 text-[#4096B5] mb-4">Our Clients</h2>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-[#4096B5]">
            Trusted by industry leaders worldwide
          </p>
        </div>

        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div ref={containerRef} className="mx-auto">
            <div 
              ref={marqueeRef}
              className="flex gap-8 w-max" 
            >
              {clientLogos.map((client, index) => (
                <motion.div
                  key={`${client.id}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 bg-white rounded-xl p-6 w-44 h-32 flex items-center justify-center shadow-sm hover:shadow-md transition-all"
                >
                  <img
                    src={client.logo}
                    alt={`${client.company} logo`}
                    className="max-h-20 w-auto object-contain"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-gray-500">${client.company}</span>`;
                      }
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsMarquee;