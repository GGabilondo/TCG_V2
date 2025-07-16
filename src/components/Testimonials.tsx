import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      rating: 5,
      text: 'Absolutely exceptional service! They transformed my Range Rover back to showroom condition. The attention to detail is remarkable, and the convenience of having them come to my home is invaluable.',
      initial: 'S'
    },
    {
      name: 'James Robertson',
      rating: 5,
      text: 'Professional, reliable, and thorough. I\'ve been using TCG CarCare for over two years now, and they consistently exceed expectations. My BMW has never looked better.',
      initial: 'J'
    },
    {
      name: 'Emma Thompson',
      rating: 5,
      text: 'As a busy mother of three, having TCG come to my workplace is a game-changer. They\'re punctual, professional, and my Audi Q7 always looks pristine when I finish work.',
      initial: 'E'
    },
    {
      name: 'Michael Anderson',
      rating: 5,
      text: 'Outstanding work on my Porsche 911. The paint correction and ceramic coating service is second to none. You can tell they genuinely care about their craft.',
      initial: 'M'
    },
    {
      name: 'Lisa Campbell',
      rating: 5,
      text: 'Impeccable service from start to finish. They\'re eco-conscious, which matters to me, and the results speak for themselves. My Mercedes looks brand new every time.',
      initial: 'L'
    },
    {
      name: 'David Wilson',
      rating: 5,
      text: 'Exceptional attention to detail and customer service. They\'ve been cleaning my fleet of company vehicles for months now, and the quality never wavers. Highly recommended.',
      initial: 'D'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-400 text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-8">
            What Our Clients Say
          </h2>
          
          {/* Google Rating */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="font-bold text-xl bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">G</span>
              </div>
              <span className="text-lg font-semibold text-white">Google Reviews</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">5.0</span>
            </div>
            <span className="text-gray-300 font-medium">Based on 11+ reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg shadow-blue-500/30">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;