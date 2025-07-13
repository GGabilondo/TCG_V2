import React from 'react';
import { Check, ArrowRight, Star, Wrench } from 'lucide-react';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      name: 'Basic Clean',
      price: 'From £35',
      image: 'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Exterior hand wash',
        'Interior vacuum',
        'Window cleaning',
        'Tyre shine'
      ],
      description: 'Essential exterior wash and interior vacuum. Perfect for regular maintenance of your vehicle\'s appearance.',
      popular: false
    },
    {
      name: 'TCG DEEP CLEAN',
      price: '£150 - £175',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Complete exterior detailing & engine bay',
        'Wheels, tyres & exhaust tips polished',
        'Safe wash with 3-month paint protection',
        'All windows & trim restoration',
        'Full interior steam cleaning',
        'Leather conditioning & fabric treatment',
        'Dashboard, console & air vents detailed',
        'Comprehensive stain removal'
      ],
      description: 'Comprehensive cleaning inside and out. Our most popular service for discerning vehicle owners. Duration: 4-7 hours.',
      popular: true
    },
    {
      name: 'Deep Clean',
      price: 'From £120',
      image: 'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: [
        'Paint correction & polishing',
        'Ceramic coating application',
        'Complete interior restoration',
        'Headlight restoration',
        'Premium protection package'
      ],
      description: 'Ultimate restoration service. Transform your vehicle back to showroom condition with our premium treatment.',
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-400 text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Premium Car Care Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional mobile car care that comes to you, delivering exceptional results every time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className={`relative bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 border ${
              service.popular ? 'ring-2 ring-blue-500 border-blue-400/50' : 'border-gray-800'
            }`}>
              {service.popular && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-lg shadow-blue-500/30">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.name} Service`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
                  {service.name.toUpperCase()}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 btn-glow"
                >
                  <span>Book {service.name === 'TCG DEEP CLEAN' ? 'Deep Clean' : service.name}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Maintenance Service */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-lg shadow-blue-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Maintenance Service</h3>
                <p className="text-red-100 mb-2">
                  Exclusive to existing customers. Keep your vehicle in pristine condition with our regular maintenance program.
                </p>
                <span className="text-sm text-blue-100">Available after booking any of our main services</span>
              </div>
            </div>
            <button 
              onClick={scrollToContact}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 shadow-lg btn-glow hover:shadow-blue-500/30"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;