import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    navigate('/contact');
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-blue-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <img 
              src="/images/The_20Clean_20Guy-removebg-preview.png" 
              alt="The Clean Guy Logo" 
              className="h-16 lg:h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium nav-link-underline glow-text"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium nav-link-underline glow-text"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-blue-400 transition-colors font-medium nav-link-underline glow-text"
            >
              About
            </button>
            <button 
              onClick={handleContactClick}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/30 transform hover:scale-105 btn-glow hover:shadow-xl hover:shadow-blue-500/50"
            >
              Contact
            </button>
          </nav>

          {/* WhatsApp & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/447398251847" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 text-green-400 hover:text-green-300 transition-all duration-300 px-3 py-2 rounded-lg border border-green-400/30 hover:border-green-400/50 hover:bg-green-400/10 backdrop-blur-sm"
            >
              <MessageCircle size={20} />
              <span className="font-medium">+44 7398 251847</span>
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md shadow-lg border-t border-blue-500/20">
            <div className="py-4 px-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors font-medium glow-text"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors font-medium glow-text"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors font-medium glow-text"
              >
                About
              </button>
              <button 
                onClick={handleContactClick}
                className="block w-full text-left py-2 text-gray-300 hover:text-blue-400 transition-colors font-medium glow-text"
              >
                Contact
              </button>
              <a 
                href="https://wa.me/447398251847"
                className="flex items-center space-x-2 py-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle size={20} />
                <span className="font-medium">WhatsApp</span>
              </a>
              <a 
                href="tel:+447398251847"
                className="flex items-center space-x-2 py-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Phone size={20} />
                <span className="font-medium">Call Us</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;