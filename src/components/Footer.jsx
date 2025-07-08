import React from 'react';
import { Images } from '../assets/assets';

const Footer = () => {
  return (
    <footer className= "bg-[rgba(248,248,255,0.5)] py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={Images.payflexLogo} alt="PayFlex Logo" className="h-10" />
        </div>

        {/* Navigation */}
        <ul className="flex space-x-6 text-gray-500 text-sm font-regular">
          <li><a href="#Header" className="hover:text-blue-600">Benefits</a></li>
          <li><a href="#Header" className="hover:text-blue-600">Testimonials</a></li>
          <li><a href="#Header" className="hover:text-blue-600">FAQ</a></li>
          <li>
            <a 
              href="https://calendly.com/payflex/primer-contacto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              Get in touch
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4">
            <a 
                href="https://www.instagram.com/payflexapp/" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={Images.instagramIcon} alt="Instagram" className="h-5 w-5 hover:opacity-75" />
            </a>
            <a 
                href="https://www.linkedin.com/company/payflexapp" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <img src={Images.linkedinIcon} alt="LinkedIn" className="h-5 w-5 hover:opacity-75" />
            </a>
</div>
      </div>

      {/* Copyright */}
      <p className="text-center text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} PayFlex. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;