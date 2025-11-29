
import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center md:text-left">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center mb-6 group">
                <div className="bg-white/10 p-2 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
                    <Cpu className="h-6 w-6 text-primary" />
                </div>
                <span className="font-bold text-xl tracking-tight">RRY AI SOLUTIONS</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Innovating the future with intelligent software, AI & IoT. We build powerful, scalable solutions that accelerate your digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/rry-ai-solutions" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/rryaisolutions?utm_source=qr&igsh=MW5wcGo5dnowa2IxZg==" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/share/1BpqAQ9uaR/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link to="/education" className="text-gray-400 hover:text-primary transition-colors text-sm">Education</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">AI & Machine Learning</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">IoT Solutions</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Custom Software</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Cloud & DevOps</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center md:items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm break-all">{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-center md:items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center md:items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{CONTACT_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RRY AI SOLUTIONS. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
