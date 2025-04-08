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
      quote: 'Working with this team was a game-changer for our business. Their expertise and dedication delivered results beyond our expectations. The implementation was seamless and the ongoing support has been exceptional.',
      role: 'CEO, TechCorp',
      rating: 5
    },
    {
      id: 2,
      clientName: 'Michael Chen',
      company: 'Innovate Inc',
      logo: '/logos/innovate.svg',
      quote: 'The quality of work and attention to detail was outstanding. We saw a 40% increase in productivity after implementing their solution. Their team understood our unique challenges immediately.',
      role: 'CTO, Innovate Inc',
      rating: 5
    },
    {
      id: 3,
      clientName: 'Emma Rodriguez',
      company: 'Global Solutions',
      logo: '/logos/global-solutions.svg',
      quote: 'Professional, responsive, and truly understands our business needs. We continue to partner with them for all our technical requirements. Their ability to translate complex concepts into actionable solutions is remarkable.',
      role: 'Director of Operations',
      rating: 4
    },
    {
      id: 4,
      clientName: 'David Kim',
      company: 'FutureTech',
      logo: '/logos/futuretech.svg',
      quote: 'Their innovative approach solved challenges we had struggled with for years. Highly recommend their services to any growing company. The ROI was evident within the first quarter of implementation.',
      role: 'Product Manager',
      rating: 5
    },
    {
      id: 5,
      clientName: 'Lisa Wong',
      company: 'Digital Ventures',
      logo: '/logos/digital-ventures.svg',
      quote: 'Exceptional service from start to finish. They delivered on time and within budget while exceeding our quality standards. Our partnership has been one of the most valuable we\'ve established.',
      role: 'Marketing Director',
      rating: 5
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial>(testimonials[0]);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Auto-rotate testimonials every 8 seconds
  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      const currentIndex = testimonials.findIndex(t => t.id === activeTestimonial.id);
      const nextIndex = (currentIndex + 1) % testimonials.length;
      setActiveTestimonial(testimonials[nextIndex]);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeTestimonial.id, isAutoRotating, testimonials]);

  const handleLogoClick = (testimonial: Testimonial) => {
    setActiveTestimonial(testimonial);
    setIsAutoRotating(false);
    // Re-enable auto-rotate after 30 seconds of inactivity
    setTimeout(() => setIsAutoRotating(true), 30000);
  };

  const renderStars = (rating: number = 5) => {
    return (
      <div className="flex mt-2 justify-center md:justify-start">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Client Testimonials
          </h1>
          <p className="mt-3 text-lg text-gray-600 md:text-xl md:mt-4">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-12 md:mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-gray-100 p-6 md:p-8 flex flex-col items-center justify-center">
                  <div className="w-full max-w-xs p-4 md:p-6">
                    <img 
                      className="w-full h-auto object-contain max-h-20 md:max-h-24" 
                      src={activeTestimonial.logo} 
                      alt={activeTestimonial.company}
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center mt-2 md:mt-4">
                    <p className="text-base md:text-lg font-medium text-gray-900">
                      {activeTestimonial.clientName}
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                      {activeTestimonial.role}
                    </p>
                    {renderStars(activeTestimonial.rating)}
                  </div>
                </div>
                <div className="md:w-2/3 p-6 md:p-8 lg:p-12">
                  <blockquote className="relative">
                    <svg
                      className="absolute -top-2 -left-6 w-8 h-8 md:w-10 md:h-10 text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 font-light leading-relaxed">
                      {activeTestimonial.quote}
                    </p>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Client Logos Carousel */}
        <div>
          <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800 mb-6 md:mb-8">
            Trusted by industry leaders
          </h2>
          <div className="relative">
            <div className="overflow-hidden py-2 md:py-4">
              <div className={`flex ${isMobile ? 'space-x-4' : 'space-x-8'} px-2 md:px-4 animate-scroll hover:pause`}>
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <button
                    key={`${testimonial.id}-${index}`}
                    onClick={() => handleLogoClick(testimonial)}
                    className={`flex-shrink-0 transition-all duration-300 transform ${
                      activeTestimonial.id === testimonial.id 
                        ? 'scale-105 md:scale-110 opacity-100' 
                        : 'opacity-70 hover:opacity-100 hover:scale-100 md:hover:scale-105'
                    }`}
                    aria-label={`View testimonial from ${testimonial.clientName}`}
                  >
                    <div className={`${isMobile ? 'w-24 h-16 p-2' : 'w-32 h-20 p-3 md:w-40 md:p-4'} flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow`}>
                      <img
                        className={`${isMobile ? 'max-h-8' : 'max-h-10 md:max-h-12'} w-auto object-contain`}
                        src={testimonial.logo}
                        alt={testimonial.company}
                        loading="lazy"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile navigation dots */}
        {isMobile && (
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((testimonial) => (
              <button
                key={`dot-${testimonial.id}`}
                onClick={() => handleLogoClick(testimonial)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeTestimonial.id === testimonial.id ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${testimonial.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsPage;