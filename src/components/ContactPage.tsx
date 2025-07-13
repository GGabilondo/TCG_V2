import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle, ArrowRight, Star } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        location: '',
        date: '',
        time: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      contact: '+44 7398 251847',
      action: 'tel:+447398251847',
      color: 'blue'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick response guaranteed',
      contact: 'Message us instantly',
      action: 'https://wa.me/447398251847',
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Detailed inquiries welcome',
      contact: 'info@tcgcarcare.co.uk',
      action: 'mailto:info@tcgcarcare.co.uk',
      color: 'blue'
    }
  ];

  const serviceAreas = [
    'Glasgow City Centre',
    'West End',
    'South Side',
    'East End',
    'Merchant City',
    'Finnieston',
    'Hillhead',
    'Shawlands',
    'Dennistoun',
    'Partick'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
            alt="Contact TCG CarCare" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-blue-900/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-400 text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            Get in Touch
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Book Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Premium Service?
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact Glasgow's premier mobile car care service. We come to you with professional equipment and expertise.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="group bg-black rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-800 hover:border-blue-400/50"
              >
                <div className={`w-16 h-16 ${method.color === 'green' ? 'bg-green-600' : 'bg-blue-500'} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${method.color === 'green' ? 'shadow-green-500/30' : 'shadow-blue-500/30'}`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors glow-text">
                  {method.title}
                </h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <p className={`font-semibold ${method.color === 'green' ? 'text-green-400' : 'text-blue-400'}`}>
                  {method.contact}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-3xl font-bold text-white mb-6">Book Your Service</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Booking Received!</h3>
                  <p className="text-gray-300">Thank you for choosing TCG CarCare. We'll contact you within 2 hours to confirm your appointment.</p>
                </div>
              ) : (
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400/50"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400/50"
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400/50"
                    >
                      <option value="">Select Service *</option>
                      <option value="Basic Clean">Basic Clean (From £35)</option>
                      <option value="Full Clean">Full Clean (From £65)</option>
                      <option value="Deep Clean">Deep Clean (From £120)</option>
                      <option value="Maintenance Service">Maintenance Service</option>
                    </select>
                  </div>

                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400/50"
                  >
                    <option value="">Select Area *</option>
                    {serviceAreas.map((area, index) => (
                      <option key={index} value={area}>{area}</option>
                    ))}
                    <option value="Other">Other (Please specify in message)</option>
                  </select>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400/50"
                    />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-400/50"
                    >
                      <option value="">Preferred Time *</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Additional details, special requests, or specific location address"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:border-blue-400/50"
                  />

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg shadow-blue-500/30 btn-glow hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-105"
                  >
                    <span>Book Your Service</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Info & Map */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="border-t border-gray-700 pt-3 mt-4">
                    <p className="text-blue-400 text-sm">Emergency services available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Service Areas</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 mt-6">
                  <p className="text-blue-400 text-sm">Don't see your area? Contact us - we may still be able to help!</p>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black rounded-lg p-6 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-3">Do you provide water and electricity?</h4>
              <p className="text-gray-300">Yes, we're completely self-sufficient. We bring our own water supply and power equipment to your location.</p>
            </div>
            
            <div className="bg-black rounded-lg p-6 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-3">How long does a service take?</h4>
              <p className="text-gray-300">Basic Clean: 1-2 hours, Full Clean: 2-3 hours, Deep Clean: 4-6 hours depending on vehicle condition.</p>
            </div>
            
            <div className="bg-black rounded-lg p-6 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-3">What payment methods do you accept?</h4>
              <p className="text-gray-300">We accept cash, card payments, bank transfers, and contactless payments for your convenience.</p>
            </div>
            
            <div className="bg-black rounded-lg p-6 border border-gray-800">
              <h4 className="text-lg font-semibold text-white mb-3">Do you work in all weather?</h4>
              <p className="text-gray-300">We work in most conditions but may reschedule during heavy rain or extreme weather for quality and safety.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;