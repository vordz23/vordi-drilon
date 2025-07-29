
import React, { useState } from 'react';
import { SERVICES, SOCIAL_LINKS } from '../constants';
import { Linkedin, Facebook, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [serviceForm, setServiceForm] = useState({ email: '', service: SERVICES[0] });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setServiceForm({ ...serviceForm, [e.target.name]: e.target.value });
  };
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact - ${contactForm.name}`;
    const body = `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`;
    window.location.href = `mailto:vordimd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Service Inquiry: ${serviceForm.service}`;
    const body = `Visitor Email: ${serviceForm.email}\n\nInterested in service: ${serviceForm.service}`;
    window.location.href = `mailto:vordimd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };


  return (
    <section id="contact" className="space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
        <div className="w-20 h-1 bg-[#1DB954] mt-2 rounded-full"></div>
      </div>
      
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 bg-[#1a1a1a] p-8 rounded-lg border border-gray-800/50">
          <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" value={contactForm.name} onChange={handleContactChange} className="w-full bg-[#282828] border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-[#1DB954] focus:border-[#1DB954] outline-none" required/>
            <input type="email" name="email" placeholder="Your Email" value={contactForm.email} onChange={handleContactChange} className="w-full bg-[#282828] border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-[#1DB954] focus:border-[#1DB954] outline-none" required/>
            <textarea name="message" placeholder="Your Message" value={contactForm.message} onChange={handleContactChange} rows={5} className="w-full bg-[#282828] border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-[#1DB954] focus:border-[#1DB954] outline-none" required></textarea>
            <button type="submit" className="w-full bg-[#1DB954] text-black font-bold py-3 px-4 rounded-md hover:bg-[#1ed760] transition-transform hover:scale-105">Send Message</button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800/50">
                <h3 className="text-2xl font-bold text-white mb-6">Request a Service</h3>
                <form onSubmit={handleServiceSubmit} className="space-y-4">
                    <select name="service" value={serviceForm.service} onChange={handleServiceChange} className="w-full bg-[#282828] border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-[#1DB954] focus:border-[#1DB954] outline-none appearance-none">
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <input type="email" name="email" placeholder="Your Email" value={serviceForm.email} onChange={handleServiceChange} className="w-full bg-[#282828] border-gray-600 rounded-md p-3 focus:ring-2 focus:ring-[#1DB954] focus:border-[#1DB954] outline-none" required/>
                    <button type="submit" className="w-full bg-gray-700 text-white font-bold py-3 px-4 rounded-md hover:bg-gray-600 transition-colors">Notify Me</button>
                </form>
            </div>
             <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-800/50 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Connect on Social Media</h3>
                 <div className="flex justify-center space-x-6">
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DB954] transition-colors"><Linkedin size={32}/></a>
                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DB954] transition-colors"><Facebook size={32}/></a>
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1DB954] transition-colors"><Instagram size={32}/></a>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
