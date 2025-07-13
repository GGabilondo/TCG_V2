import React from 'react';
import { ArrowRight, Star, Users, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Luxury car detailing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-red-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/50 text-blue-400 text-sm font-medium mb-8 shadow-lg shadow-blue-500/20">
            <Star className="w-4 h-4 mr-2" />
            Premium Mobile Service
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Car Care
            <br />
            delivered{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              wherever you are
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            With over 8 years of experience, countless 5-star reviews and the leading car care service in Glasgow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105 btn-glow"
            >
              <span>Book Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToServices}
              className="hidden md:group md:bg-white/10 md:backdrop-blur-sm md:text-white md:px-8 md:py-4 md:rounded-full md:font-semibold md:hover:bg-blue-500/20 md:transition-all md:duration-300 md:border md:border-white/20 md:hover:border-blue-400/40 md:btn-glow md:hover:shadow-lg md:hover:shadow-blue-500/30 md:flex md:items-center"
            >
              View Services
            </button>
          </div>

          {/* Mobile Google Rating */}
          <div className="md:hidden flex items-center justify-center space-x-3 mb-8">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">G</span>
            </div>
            <span className="text-lg font-bold text-white">4.8</span>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="hidden md:grid md:grid-cols-1 md:sm:grid-cols-3 md:gap-6 md:max-w-2xl md:mx-auto">
            <div className="hidden md:block md:text-center">
              <div className="hidden md:flex md:items-center md:justify-center md:mb-2">
                <Clock className="hidden md:block md:w-6 md:h-6 md:text-blue-400 md:mr-2" />
                <span className="hidden md:block md:text-3xl md:font-bold md:text-white">8+</span>
              </div>
              <p className="hidden md:block md:text-gray-200">Years Experience</p>
            </div>
            <div className="hidden md:block md:text-center">
              <div className="hidden md:flex md:items-center md:justify-center md:mb-2">
                <Users className="hidden md:block md:w-6 md:h-6 md:text-blue-400 md:mr-2" />
                <span className="hidden md:block md:text-3xl md:font-bold md:text-white">500+</span>
              </div>
              <p className="hidden md:block md:text-gray-200">Happy Clients</p>
            </div>
            <div className="hidden md:block md:text-center">
              <div className="hidden md:flex md:items-center md:justify-center md:mb-2">
                <Star className="hidden md:block md:w-6 md:h-6 md:text-blue-400 md:mr-2" />
                <span className="hidden md:block md:text-3xl md:font-bold md:text-white">4.8★</span>
              </div>
              <p className="hidden md:block md:text-gray-200">Google Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:block md:absolute md:bottom-8 md:left-1/2 md:transform md:-translate-x-1/2 md:animate-bounce">
        <div className="hidden md:block md:w-6 md:h-10 md:border-2 md:border-blue-400/50 md:rounded-full md:flex md:justify-center">
          <div className="hidden md:block md:w-1 md:h-3 md:bg-blue-400/80 md:rounded-full md:mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;