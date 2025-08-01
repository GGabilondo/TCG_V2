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
          src="/images/Hero_2.jpg" 
          alt="Luxury car detailing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/50 text-blue-400 text-sm font-medium mb-8 shadow-lg shadow-blue-500/20">
            <Star className="w-4 h-4 mr-2" />
            Mobile Valeting & Detailing
          </div>

          {/* Title */}
          <h1 className="font-bold text-white mb-2 md:mb-3 lg:mb-4 leading-tight">
            <span className="block text-3xl sm:text-4xl md:text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl">Professional</span>
            <span className="block text-3xl sm:text-4xl md:text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl">Car Care delivered</span>
            <span className="block text-4xl sm:text-5xl md:text-3xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              wherever you are
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-sm lg:text-xl xl:text-2xl text-gray-200 mb-3 md:mb-4 lg:mb-6 max-w-2xl mx-auto leading-relaxed">
            With over 4 years of experience and countless 5-star reviews we are the leading car care service in Glasgow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-2 lg:gap-4 justify-center items-center mb-3 md:mb-4 lg:mb-8">
            <button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 md:px-4 lg:px-6 py-2 md:py-2 lg:py-3 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105 btn-glow text-sm md:text-xs lg:text-base"
            >
              <span>Book Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToServices}
              className="hidden md:group md:bg-white/10 md:backdrop-blur-sm md:text-white md:px-4 lg:px-6 md:py-2 lg:py-3 md:rounded-full md:font-semibold md:hover:bg-blue-500/20 md:transition-all md:duration-300 md:border md:border-white/20 md:hover:border-blue-400/40 md:btn-glow md:hover:shadow-lg md:hover:shadow-blue-500/30 md:flex md:items-center md:text-xs lg:text-base"
            >
              View Services
            </button>
          </div>

          {/* Mobile Google Rating */}
          <div className="md:hidden flex flex-col items-center justify-center mb-2 space-y-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="font-bold text-lg bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">G</span>
              </div>
              <span className="text-3xl font-bold text-white">5.0</span>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="hidden lg:flex lg:justify-center lg:items-center lg:space-x-6 xl:space-x-8 2xl:space-x-12 lg:max-w-4xl lg:mx-auto lg:mt-2">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">4+</span>
              </div>
              <p className="text-xs lg:text-sm xl:text-base text-gray-200">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">560+</span>
              </div>
              <p className="text-xs lg:text-sm xl:text-base text-gray-200">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">5.0★</span>
              </div>
              <p className="text-xs lg:text-sm xl:text-base text-gray-200">Google Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden 2xl:block 2xl:absolute 2xl:bottom-8 2xl:left-1/2 2xl:transform 2xl:-translate-x-1/2 2xl:animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400/80 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;