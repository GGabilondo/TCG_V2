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
      name: 'TCG MAINTENANCE VALET',
      price: '£100 - £120',
      image: '/images/TCG_refresh.png',
      duration: '3 - 4 Hours',
      description: 'This service is only available if the vehicle has previously been Deep Cleaned or Protected by us.\n\nThe service includes:',
      popular: false
    },
    {
      name: 'TCG DEEP CLEAN',
      price: '£200 - £220',
      image: '/images/TCG_DEEP_CLEAN_service.png',
      duration: '4 - 7 Hours',
      description: 'Our most popular service: this package will leave your car looking like new or better!\n\nAll the services included in the TCG MAINTENANCE VALET package plus:',
      popular: true
    },
    {
      name: 'TCG PROTECT',
      price: '£350 - £400',
      image: '/images/TCG PROTECT.png',
      duration: '7 - 9 Hours',
      description: 'Our premium service for discerning vehicle owners who want the ultimate in car care.\n\nAll services included in TCG DEEP CLEAN package plus:',
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
          <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            Premium Car Care Solutions
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
            Professional mobile car care that comes to you.
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

                <p className="text-gray-300 mb-4 text-sm leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>

                {/* Features for TCG PROTECT */}
                {service.name === 'TCG PROTECT' && (
                  <div className="mb-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-blue-400 font-semibold text-sm mb-2 uppercase tracking-wide flex items-center">
                          <Check className="w-4 h-4 mr-2" />
                          Exterior
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed ml-6 -mt-1">Chemical decontamination tar & iron, faded exterior plastics restored</p>
                      </div>
                      
                      <div>
                        <h4 className="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-wide flex items-center">
                          <Check className="w-4 h-4 mr-2" />
                          Interior
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed ml-6 -mt-1">Deep interior detailing and protection, leather seats cleaned & conditioned</p>
                      </div>
                      
                      <div>
                        <h4 className="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-wide flex items-center">
                          <Check className="w-4 h-4 mr-2" />
                          Protection
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed ml-6 -mt-1">One year ceramic coating for paint, glass & wheels protection</p>
                      </div>
                      
                    </div>
                    
                    {/* Duration & Price Highlight */}
                    <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-3 mb-4 mt-8">
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
                )}

                {/* Features for TCG DEEP CLEAN */}
                {(service.name === 'TCG MAINTENANCE VALET' || service.name === 'TCG DEEP CLEAN') && (
                  <div className="mb-6">
                    {service.name === 'TCG DEEP CLEAN' ? (
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-wide flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            Exterior
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed ml-6 -mt-1">Detailed brushing of exterior crevices</p>
                        </div>
                        
                        <div>
                          <h4 className="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-wide flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            Interior
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed ml-6 -mt-1">Steam cleaning for carpets, mats & leather/fabric seats</p>
                        </div>
                        
                        <div>
                          <h4 className="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-wide flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            Paint
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed ml-6 -mt-1">3-month paint, glass & wheels protection, exhausts polished</p>
                        </div>
                        
                        <div>
                          <h4 className="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-wide flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            Details
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed ml-6 -mt-1">Air vents, console, dashboard & steering wheel deep cleaned</p>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Features for TCG MAINTENANCE VALET */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-wide flex items-center">
                              <Check className="w-4 h-4 mr-2" />
                              Exterior
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed ml-6 -mt-1">Wheels & tyres detailed, safe two-bucket wash</p>
                          </div>
                          
                          <div>
                            <h4 className="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-wide flex items-center">
                              <Check className="w-4 h-4 mr-2" />
                              Interior
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed ml-6 -mt-1">Boot, carpets & mats hoovered, seats wiped/cleaned</p>
                          </div>
                          
                          <div>
                            <h4 className="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-wide flex items-center">
                              <Check className="w-4 h-4 mr-2" />
                              Windows
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed ml-6 -mt-1">Exterior windows & mirrors cleaned</p>
                          </div>
                          
                          <div>
                            <h4 className="text-blue-400 font-semibold text-sm mb-3 uppercase tracking-wide flex items-center">
                              <Check className="w-4 h-4 mr-2" />
                              Details
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed ml-6 -mt-1">Door, boot & bonnet shuts cleaned</p>
                          </div>
                        </div>
                      </>
                    )}
                    
                    {/* Duration & Price Highlight */}
                    <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-3 mb-4 mt-8">
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
                )}

                <button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 btn-glow"
                >
                  <span>Book {service.name === 'TCG MAINTENANCE VALET' ? 'TCG MAINTENANCE VALET' : service.name === 'TCG DEEP CLEAN' ? 'TCG DEEP CLEAN' : service.name === 'TCG PROTECT' ? 'TCG PROTECT' : service.name}</span>
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