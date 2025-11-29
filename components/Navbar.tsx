import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; // ensure src/assets/logo.png exists

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Education', path: '/education' },
    { name: 'Contact', path: '/contact' },
  ];

  // fallback state if img fails to load
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 h-16 md:h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full items-center">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center py-2 group"
            onClick={() => setIsOpen(false)}
          >
            {/* optional rounded bg for better contrast on white logos */}
            <div className="flex items-center">
              {!imgFailed ? (
                <img
                  src={logo}
                  alt="RRY AI Solutions"
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-all"
                  style={{ imageRendering: 'auto', display: 'block' }}
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <div className="flex items-center">
                  {/* Fallback: text/logo svg or plain text */}
                  <span className="text-primary font-bold text-base md:text-lg">
                    RRY
                  </span>
                  <span className="sr-only">RRY AI Solutions</span>
                </div>
              )}
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-all duration-200 border-b-2 ${
                    isActive
                      ? 'text-primary border-primary'
                      : 'text-gray-600 border-transparent hover:text-primary hover:border-blue-200'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 w-full h-[calc(100vh-4rem)] overflow-y-auto border-t border-gray-100">
          <div className="px-4 py-6 space-y-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-center px-4 py-4 rounded-xl text-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-primary border border-blue-100'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-6 w-full">
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-4 rounded-xl bg-primary text-white font-semibold shadow-md hover:bg-blue-600 transition-colors"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
