import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      image: 'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      label: 'Exterior Detailing'
    },
    {
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      label: 'Interior Restoration'
    },
    {
      image: 'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      label: 'Wheel Care'
    },
    {
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      label: 'Glass Treatment'
    },
    {
      image: 'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      label: 'Engine Bay'
    },
    {
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      label: 'Mobile Service'
    },
    {
      image: 'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      label: 'SUV Detailing'
    },
    {
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
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
        <div className="relative overflow-hidden">
          <div className="flex space-x-6 animate-scroll">
            {[...galleryItems, ...galleryItems].map((item, index) => (
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
      </div>
    </section>
  );
};

export default Gallery;