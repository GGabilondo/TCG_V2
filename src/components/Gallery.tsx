import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const galleryItems = [
    {
      image: '/images/IMG_2615.JPG',
      label: 'Premium Detailing'
    },
    {
      image: '/images/Profesional_results.jpg',
      label: 'Professional Results'
    },
    {
      image: '/images/interior_cleaning_audi-tiruy55r.png',
      label: 'Exterior Detailing'
    },
    {
      image: '/images/interior_cleaning_audi-2.png',
      label: 'Interior Restoration'
    },
    {
      image: '/images/Wheel_care.jpg',
      label: 'Wheel Care'
    },
    {
      image: '/images/interior_cleaning_audi_lamborghini-1snl2-jc.png',
      label: 'Glass Treatment'
    },
    {
      image: '/images/Engine_bay.jpg',
      label: 'Engine Bay'
    },
    {
      image: '/images/11-cz_a1h-z.png',
      label: 'Mobile Service'
    },
    {
      image: '/images/interior_cleaning_audi-tiruy55r.png',
      label: 'SUV Detailing'
    },
    {
      image: '/images/interior_cleaning_audi_q8-by5jxqk1.png',
      label: 'Executive Care'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-400 text-sm font-medium mb-4">
            Our Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            See the Difference
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional care makes all the difference
          </p>
        </div>

        {/* Gallery */}
        <div className="flex items-center space-x-6">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-105 btn-glow"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Gallery Container */}
          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-x-auto scrollbar-hide md:scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex space-x-6 pb-4">
              {galleryItems.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-80 h-60 relative group cursor-pointer">
                  <img 
                    src={item.image} 
                    alt={item.label}
                    className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all duration-300 border border-gray-800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="hidden md:flex w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-105 btn-glow"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;