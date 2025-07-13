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
      name: 'TCG REFRESH',
      image: '/src/assets/interior_cleaning_audi-tiruy55r copy.png',
      exteriorFeatures: [
        'Wheels, tyres & wheel wells detailed',
        'Safe two-bucket wash',
        'Exterior windows cleaned',
        'Door, boot & bonnet shuts cleaned'
      ],
      interiorFeatures: [
        'Boot, carpets & mats hoovered',
        'Leather seats wiped/cleaned',
        'Air vents detailed',
        'Centre console, door cards, and dashboard wiped & cleaned',
        'Interior windows & mirrors cleaned',
        'Steering wheel cleaned'
      ],
      duration: '2.5 - 4 Hours',
      description: 'A full interior and exterior refresh without the advanced restoration elements. Ideal for well-kept vehicles or as a seasonal refresh.',
      popular: false
    },
    {
      name: 'TCG DEEP CLEAN',
      price: '£150 - £175',
      image: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      exteriorFeatures: [
        'Engine bay cleaned',
        'Wheels, tyres & wheel wells detailed',
        'Safe two-bucket wash',
        'Exhaust tips polished',
        '3-month paint protection applied',
        'Exterior windows cleaned',
        'Door, boot & bonnet shuts cleaned',
        'Faded exterior trim dressed and restored'
      ],
      interiorFeatures: [
        'Boot hoovered & steam cleaned',
        'Carpets & mats hoovered & steam cleaned',
        'Leather seats steam cleaned & conditioned',
        'Fabric seats steam cleaned',
        'Stain removal where required',
        'Air vents detailed',
        'Centre console cleaned & detailed',
        'Door cards & interior doors cleaned',
        'Interior windows & mirrors cleaned',
        'Dashboard cleaned',
        'Steering wheel deep cleaned'
      ],
      duration: '4 - 7 Hours',
      description: 'Comprehensive cleaning inside and out. Our most popular service for discerning vehicle owners.',
      popular: true
    },
    {
      name: 'Deep Clean',
      price: 'From £120',
      image: 'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      name: 'TCG PROTECT',
      image: 'https://images.pexels.com/photos/6872149/pexels-photo-6872149.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      exteriorFeatures: [
        'Engine bay cleaned',
        'Wheels, tyres & wheel wells details',
        'Safe two-bucket wash',
        'Paint Decontamination Chemical',
        'Paint Decontamination Clay Bar',
        '1 Year Ceramic Coating Applied',
        'Exhaust tips polished',
        'Exterior windows cleaned',
        'Door, boot & bonnet shuts cleaned',
        'Faded exterior trim dressed and restored'
      ],
      interiorFeatures: [
        'Boot hovered & steam cleaned',
        'Carpets & mats hoovered & steam cleaned',
        'Leather seats steam cleaned & conditioned',
        'Fabric seats steam cleaned',
        'Stain removal where required',
        'Air vents detailed',
        'Centre console cleaned & detailed',
        'Door cards & interior doors cleaned',
        'Interior windows & mirrors cleaned',
        'Dashboard cleaned & dressed'
      ],
      duration: '7 - 8 Hours',
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
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features for TCG DEEP CLEAN */}
                {(service.name === 'TCG REFRESH' || service.name === 'TCG DEEP CLEAN' || service.name === 'TCG PROTECT') ? (
                  <div className="mb-6">
                    {/* Exterior Features */}
                    <div className="mb-4">
                      <h4 className="text-blue-400 font-semibold text-sm mb-2 uppercase tracking-wide">Exterior</h4>
                      <ul className="space-y-1">
                        {service.exteriorFeatures?.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                            <Check className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Interior Features */}
                    <div className="mb-4">
                      <h4 className="text-blue-400 font-semibold text-sm mb-2 uppercase tracking-wide">Interior</h4>
                      <ul className="space-y-1">
                        {service.interiorFeatures?.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                            <Check className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Duration & Price Highlight */}
                    <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-3 mb-4">
                      <div className="flex justify-between items-center">
                        <div className="text-center flex-1">
                          <div className="text-blue-400 text-xs font-medium uppercase tracking-wide">Duration</div>
                          <div className="text-white font-bold">{service.duration}</div>
                        </div>
                        <div className="w-px h-8 bg-blue-400/30"></div>
                        <div className="text-center flex-1">
                          <div className="text-blue-400 text-xs font-medium uppercase tracking-wide">Price</div>
                          <div className="text-white font-bold">{service.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Regular features for other services */
                  <ul className="space-y-2 mb-6">
                    {service.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 btn-glow"
                >
                  <span>Book {service.name === 'TCG REFRESH' ? 'TCG REFRESH' : service.name === 'TCG DEEP CLEAN' ? 'TCG DEEP CLEAN' : service.name === 'TCG PROTECT' ? 'TCG PROTECT' : service.name}</span>
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