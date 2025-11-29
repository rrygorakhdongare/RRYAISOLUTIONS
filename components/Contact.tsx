import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get In Touch
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div className="mb-12 lg:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-medium text-gray-900">Email</p>
                            <p className="text-gray-600">{CONTACT_INFO.email}</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-medium text-gray-900">Phone</p>
                            <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-medium text-gray-900">Location</p>
                            <p className="text-gray-600">{CONTACT_INFO.location}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-2 px-3 border" placeholder="Your Name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-2 px-3 border" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary py-2 px-3 border" placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;