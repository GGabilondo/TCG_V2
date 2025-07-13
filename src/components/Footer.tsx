import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    alert('Thank you for your booking request! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="contact" className="bg-black text-white border-t border-blue-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience Premium Car Care?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
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
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors border border-gray-700 hover:border-blue-400"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
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
            <form 
             name="footer-contact"
             method="POST"
             data-netlify="true"
             data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="footer-contact" />
             <input type="hidden" name="bot-field" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="">Select Service</option>
                <option value="TCG REFRESH">TCG REFRESH</option>
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
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg shadow-blue-500/30 btn-glow hover:shadow-xl hover:shadow-blue-500/50"
              >
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
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