import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  clientName: string;
  company: string;
  logo: string;
  quote: string;
  role: string;
  rating?: number;
}

const TestimonialsPage: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      company: 'TechCorp',
      logo: '/logos/techcorp.svg',
      quote: 'Working with this team was a game-changer for our business...',
      role: 'CEO, TechCorp',
      rating: 5
    },
    {
      id: 2,
      clientName: 'Michael Chen',
      company: 'Innovate Inc',
      logo: '/logos/innovate.svg',
      quote: 'The quality of work and attention to detail was outstanding...',
      role: 'CTO, Innovate Inc',
      rating: 5
    },
    {
      id: 3,
      clientName: 'Emma Rodriguez',
      company: 'Global Solutions',
      logo: '/logos/global-solutions.svg',
      quote: 'Professional, responsive, and truly understands our business...',
      role: 'Director of Operations',
      rating: 4
    },
    {
      id: 4,
      clientName: 'David Kim',
      company: 'FutureTech',
      logo: '/logos/futuretech.svg',
      quote: 'Their innovative approach solved challenges we had struggled with...',
      role: 'Product Manager',
      rating: 5
    },
    {
      id: 5,
      clientName: 'Lisa Wong',
      company: 'Digital Ventures',
      logo: '/logos/digital-ventures.svg',
      quote: 'Exceptional service from start to finish...',
      role: 'Marketing Director',
      rating: 5
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial>(testimonials[0]);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      const currentIndex = testimonials.findIndex(t => t.id === activeTestimonial.id);
      const nextIndex = (currentIndex + 1) % testimonials.length;
      setActiveTestimonial(testimonials[nextIndex]);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeTestimonial.id, isAutoRotating]);

  const handleLogoClick = (testimonial: Testimonial) => {
    setActiveTestimonial(testimonial);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 30000);
  };

  const renderStars = (rating: number = 5) => (
    <div className="flex mt-2 justify-center md:justify-start">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-[#4096B5]' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#4096B5]">
            What Our Clients Say
          </h1>
          <p className="mt-3 text-gray-600 text-base sm:text-lg">
            Real experiences from real clients. See why they trust us.
          </p>
        </div>

        <div className="mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3 flex flex-col items-center text-center md:text-left">
                  <img
                    src={activeTestimonial.logo}
                    alt={activeTestimonial.company}
                    className="h-20 w-auto object-contain mb-4"
                  />
                  <div>
                    <p className="text-lg font-semibold text-[#4096B5]">{activeTestimonial.clientName}</p>
                    <p className="text-sm text-gray-500">{activeTestimonial.role}</p>
                    {renderStars(activeTestimonial.rating)}
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-gray-700 text-base leading-relaxed">
                  <blockquote className="italic relative">
                    <svg
                      className="absolute -top-2 -left-4 w-6 h-6 text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zM25.864 4c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    {activeTestimonial.quote}
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <h2 className="text-center text-xl font-semibold text-[#4096B5] mb-6">
          Our Trusted Clients
        </h2>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex space-x-4 px-2 py-2">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => handleLogoClick(testimonial)}
                className={`flex-shrink-0 transition-all duration-300 ${
                  activeTestimonial.id === testimonial.id
                    ? 'scale-110 border-2 border-[#4096B5] bg-white shadow-md'
                    : 'opacity-60 hover:opacity-100'
                } rounded-xl p-2 w-24 h-16 flex items-center justify-center`}
              >
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="h-10 object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {isMobile && (
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((testimonial) => (
              <button
                key={`dot-${testimonial.id}`}
                onClick={() => handleLogoClick(testimonial)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  activeTestimonial.id === testimonial.id ? 'bg-[#4096B5]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsPage;
