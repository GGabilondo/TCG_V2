import React from 'react';
import { CheckCircle, Zap, Leaf, Clock } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Exceptional Attention to Detail',
      description: 'Every surface meticulously cleaned'
    },
    {
      icon: Zap,
      title: 'Fully Self-Sufficient',
      description: 'We bring our own water and equipment'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Products',
      description: 'High-quality conscious cleaning'
    },
    {
      icon: Clock,
      title: 'Emergency & Express Service',
      description: 'Available when you need it most'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-400 text-sm font-medium mb-4">
              About TCG CarCare
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Glasgow's Premier Mobile Car Care
            </h2>
            <div className="space-y-4 text-gray-300 mb-8">
              <p className="text-lg leading-relaxed">
                At TCG Car Care, we provide fully mobile valeting and detailing, complete with our own power and water, so you can enjoy a flawless finish at home, work, or any location you choose.
              </p>
              <p className="text-lg leading-relaxed">
                Our commitment is simple: obsessive attention to detail, exceptional service, and results that make your vehicle look and feel showroom fresh.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-400/30">
                    <benefit.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/images/11-cz_a1h-z.png" 
                alt="TCG CarCare mobile service" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">The Clean Guys</h3>
                <p className="text-lg">Mobile Valeting & Detailing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;