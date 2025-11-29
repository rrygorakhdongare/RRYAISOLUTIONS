import React from 'react';
import PageHeader from '../components/PageHeader';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react';

// Importing your office image
import outerOffice from '../assets/outer_office.jpg';

const Contact: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd love to hear from you. Reach out to us for any inquiries." 
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Email Card */}
                <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-primary mb-6">
                        <Mail className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-500 mb-4">For general inquiries and support</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-medium text-primary hover:underline block break-all">
                        {CONTACT_INFO.email}
                    </a>
                </div>

                {/* Phone Card */}
                <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-primary mb-6">
                        <Phone className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-500 mb-4">Mon-Fri from 10 AM to 6 PM</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg font-medium text-primary hover:underline">
                        {CONTACT_INFO.phone}
                    </a>
                </div>

                {/* Location Card */}
                <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-primary mb-6">
                        <MapPin className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-500 mb-4">Our corporate headquarters</p>
                    <p className="text-lg font-medium text-gray-900">
                        {CONTACT_INFO.location}
                    </p>
                </div>
            </div>

            {/* Global Corporate Office Section */}
            <div className="bg-secondary rounded-3xl overflow-hidden shadow-2xl text-white">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    
                    {/* Left Content */}
                    <div className="p-10 md:p-16 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-6">Global Corporate Office</h3>
                        <p className="text-blue-200 mb-8 text-lg leading-relaxed">
                            RRY AI SOLUTIONS operates globally, delivering excellence across borders. 
                            We are committed to providing top-tier support regardless of your location.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Globe className="h-6 w-6 text-primary mr-4" />
                                <span className="font-medium">International Clients Supported</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-6 w-6 text-primary mr-4" />
                                <span className="font-medium">Rapid Response Times</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image → replaced with your image */}
                    <div className="relative h-64 md:h-auto">
                        <img 
                            src={outerOffice}
                            alt="Global Corporate Office"
                            className="absolute inset-0 w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-blue-900/30"></div>
                    </div>

                </div>
            </div>

        </div>
      </section>
    </>
  );
};

export default Contact;
