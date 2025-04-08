import React from 'react';

type Testimonial = {
  id: number;
  clientName: string;
  company: string;
  logo: string;
  quote: string;
  role: string;
};

const TestimonialsPage: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      company: 'TechCorp',
      logo: 'https://via.placeholder.com/150x80?text=TechCorp',
      quote: 'Working with this team was a game-changer for our business. Their expertise and dedication delivered results beyond our expectations.',
      role: 'CEO, TechCorp'
    },
    {
      id: 2,
      clientName: 'Michael Chen',
      company: 'Innovate Inc',
      logo: 'https://via.placeholder.com/150x80?text=Innovate',
      quote: 'The quality of work and attention to detail was outstanding. We saw a 40% increase in productivity after implementing their solution.',
      role: 'CTO, Innovate Inc'
    },
    {
      id: 3,
      clientName: 'Emma Rodriguez',
      company: 'Global Solutions',
      logo: 'https://via.placeholder.com/150x80?text=GlobalSol',
      quote: 'Professional, responsive, and truly understands our business needs. We continue to partner with them for all our technical requirements.',
      role: 'Director of Operations'
    },
    {
      id: 4,
      clientName: 'David Kim',
      company: 'FutureTech',
      logo: 'https://via.placeholder.com/150x80?text=FutureTech',
      quote: 'Their innovative approach solved challenges we had struggled with for years. Highly recommend their services to any growing company.',
      role: 'Product Manager'
    },
    {
      id: 5,
      clientName: 'Lisa Wong',
      company: 'Digital Ventures',
      logo: 'https://via.placeholder.com/150x80?text=DigitalV',
      quote: 'Exceptional service from start to finish. They delivered on time and within budget while exceeding our quality standards.',
      role: 'Marketing Director'
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = React.useState<Testimonial>(testimonials[0]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Trusted by industry leaders and innovative startups
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-16 max-w-4xl mx-auto">
          <div className="md:flex">
            <div className="md:flex-shrink-0 mb-6 md:mb-0 md:mr-6">
              <img 
                className="h-24 w-auto object-contain" 
                src={activeTestimonial.logo} 
                alt={activeTestimonial.company} 
              />
            </div>
            <div>
              <blockquote>
                <p className="text-xl font-medium text-gray-800 mb-4">
                  "{activeTestimonial.quote}"
                </p>
                <footer className="flex items-center">
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">
                      {activeTestimonial.clientName}
                    </div>
                    <div className="text-base text-gray-600">
                      {activeTestimonial.role}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Client Logos Scroll View */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-medium text-gray-900 mb-6">
            Trusted by leading brands
          </h3>
          <div className="relative">
            <div className="overflow-x-auto py-4 px-2">
              <div className="flex space-x-8">
                {testimonials.map((testimonial) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setActiveTestimonial(testimonial)}
                    className={`flex-shrink-0 transition-all duration-300 ${activeTestimonial.id === testimonial.id ? 'scale-110' : 'opacity-70 hover:opacity-100'}`}
                  >
                    <img
                      className="h-16 w-auto object-contain"
                      src={testimonial.logo}
                      alt={testimonial.company}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  className="h-12 w-auto mr-4" 
                  src={testimonial.logo} 
                  alt={testimonial.company} 
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{testimonial.clientName}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;