import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-800 text-white p-10 mt-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* FontAwesome Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">awesome-site</h2>
          <p className="text-gray-400">
            Most Popular website for Exploring Code.
            New site, new domain, new homepage, 
            Quick Start
          </p>
        </div>
        
        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li><a href="#jobs" className="hover:text-white">Jobs</a></li>
            <li><a href="#press" className="hover:text-white">Press</a></li>
          </ul>
        </div>
        
        {/* Community Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Community</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#support" className="hover:text-white">Support</a></li>
            <li><a href="#forum" className="hover:text-white">Forum</a></li>
            <li><a href="#license" className="hover:text-white">License</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        
        {/* Social Media Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="text-center text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} awesome-site. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;