import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = React.useState<{ image: string; label: string } | null>(null);

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

  const openImageModal = (item: { image: string; label: string }) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeImageModal();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);

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
      image: '/images/Exterior_detailing.jpg',
      label: 'Exterior Detailing'
    },
    {
      image: '/images/Interior_restoration.jpg',
      label: 'Interior Restoration'
    },
    {
      image: '/images/Wheel_care.jpg',
      label: 'Wheel Care'
    },
    {
      image: '/images/Glass_Treatment.jpg',
      label: 'Glass Treatment'
    },
    {
      image: '/images/Engine_bay.jpg',
      label: 'Engine Bay'
    },
    {
      image: '/images/Movile_service.jpg',
      label: 'Mobile Service'
    },
    {
      image: '/images/SUV_detailing.jpg',
      label: 'SUV Detailing'
    },
    {
      image: '/images/Executive_care.jpg',
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
          <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            See the Difference
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto">
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
                <div 
                  key={index} 
                  className="flex-shrink-0 w-80 h-60 relative group cursor-pointer"
                  onClick={() => openImageModal(item)}
                >
                  <img 
                    src={item.image} 
                    alt={item.label}
                    className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all duration-300 border border-gray-800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
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

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            {/* Close button */}
            <button
              onClick={closeImageModal}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal content */}
            <div className="relative max-w-6xl max-h-[90vh] mx-4">
              <img
                src={selectedImage.image}
                alt={selectedImage.label}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
                <h3 className="text-white font-semibold text-lg">{selectedImage.label}</h3>
              </div>
            </div>

            {/* Click outside to close */}
            <div 
              className="absolute inset-0 -z-10"
              onClick={closeImageModal}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;