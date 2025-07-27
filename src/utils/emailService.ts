import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_45gfbfp';
const EMAILJS_TEMPLATE_ID_FOOTER = 'template_kclc6za';
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_kclc6za';
const EMAILJS_PUBLIC_KEY = 'RUwF3v5Lc_Npj30op';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface FooterFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  date: string;
  time: string;
  message: string;
}

export const sendFooterForm = async (formData: FooterFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      form_type: 'Quick Booking (Footer)',
      to_email_1: 'info@tcgcarcare.co.uk',
      to_email_2: 'hola@remedio.studio',
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_FOOTER,
      templateParams
    );

    return true;
  } catch (error) {
    console.error('Error sending footer form:', error);
    return false;
  }
};

export const sendContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      location: formData.location,
      date: formData.date,
      time: formData.time,
      message: formData.message,
      form_type: 'Detailed Booking (Contact Page)',
      to_email_1: 'info@tcgcarcare.co.uk',
      to_email_2: 'hola@remedio.studio',
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    );

    return true;
  } catch (error) {
    console.error('Error sending contact form:', error);
    return false;
  }
};