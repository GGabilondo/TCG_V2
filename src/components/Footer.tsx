import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Instagram, Linkedin, ArrowRight, Youtube } from 'lucide-react';
import { sendFooterForm, FooterFormData } from '../utils/emailService';

// Declare fbq function for TypeScript
declare global {
  interface Window {
    fbq: (action: string, event: string, params?: any) => void;
    ttq: {
      track: (event: string, params?: any) => void;
    };
  }
}

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const success = await sendFooterForm(formData as FooterFormData);
      
      if (success) {
        setIsSubmitted(true);
        
        // Track Meta Pixel event for footer form submission
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Footer Quick Booking Form',
            content_category: 'Contact Form',
            value: 150, // Average service value
            currency: 'GBP'
          });
        }
        
        // Track TikTok Pixel event for footer form submission
        if (typeof window !== 'undefined' && window.ttq) {
          window.ttq.track('CompletePayment', {
            content_type: 'form_submission',
            content_name: 'Footer Quick Booking Form',
            value: 150,
            currency: 'GBP'
          });
        }
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setSubmitError('Failed to send message. Please try again or contact us directly.');
      }
    } catch (error) {
      setSubmitError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer id="contact" className="bg-black text-white border-t border-blue-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            Ready to Experience Premium Car Care?
          </h2>
          <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
            Book your service today and see why Glasgow's elite trust TCG CarCare.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <a 
                href="tel:+447398251847" 
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">+44 7398 251847</span>
              </a>
              
              <a 
                href="https://wa.me/447398251847" 
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-700 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-lg">WhatsApp</span>
              </a>
              
              <a 
                href="mailto:info@tcgcarcare.co.uk" 
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">info@tcgcarcare.co.uk</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-6">
              <a 
                href="https://www.instagram.com/tcgcarcare/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors border border-gray-700 hover:border-blue-400"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@tcgcarcare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors border border-gray-700 hover:border-red-400"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@tcgcarcare?_t=ZN-8yIXtL1TRG2&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors border border-gray-700 hover:border-pink-400"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/tcgcarcare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors border border-gray-700 hover:border-blue-400"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Map */}
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.5!2d-4.2518!3d55.8642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDUxJzUxLjEiTiA0wrAxNScwNi41Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%" 
              height="300" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Book Your Service</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-white transform rotate-45" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-300">Thank you for contacting TCG CarCare. We'll respond within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitError && (
                  <div className="bg-red-500/20 border border-red-400/50 rounded-lg p-3 text-red-400 text-sm">
                    {submitError}
                  </div>
                )}
                
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="">Select Service</option>
                <option value="TCG MAINTENANCE VALET">TCG MAINTENANCE VALET</option>
                <option value="TCG DEEP CLEAN">TCG DEEP CLEAN</option>
                <option value="TCG PROTECT">TCG PROTECT</option>
                <option value="Maintenance Service">Maintenance Service</option>
              </select>
              <textarea
                name="message"
                placeholder="Additional details or special requests"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg shadow-blue-500/30 btn-glow hover:shadow-xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Quick Booking'}</span>
                {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
            )}
          </div>
        </div>

        {/* Mobile Logo - Shows after form on mobile */}
        <div className="lg:hidden flex justify-center pt-8">
          <img 
            src="/images/The_20Clean_20Guy-removebg-preview.png" 
            alt="The Clean Guy Logo" 
            className="h-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-500/20 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TCG CarCare. All rights reserved. | Professional mobile car cleaning in Glasgow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;