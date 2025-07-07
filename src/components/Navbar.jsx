import React, { useState, useEffect } from 'react';
import { Images } from '../assets/assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
  
      if (currentScroll === 0) {
        setShowNavbar(true); // Siempre mostrar si estás en el top
      } else if (currentScroll > lastScrollY) {
        setShowNavbar(false); // Scrolleando hacia abajo
      } else {
        setShowNavbar(true); // Scrolleando hacia arriba
      }
  
      setLastScrollY(currentScroll);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50 bg-transparent
        transition-all duration-300 ease-in-out
        ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={Images.payflexLogo}
            alt="PayFlex Logo"
            className="h-16 sm:h-18 md:h-20 cursor-pointer"
          />
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center justify-end flex-grow space-x-6 md:space-x-8">
          <a href="#Header" className="cursor-pointer">Benefits</a>
          <a href="#Header" className="cursor-pointer">Testimonials</a>
          <a href="#Header" className="cursor-pointer">FAQ</a>
          <button className="bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
            <a href="#Header" className="text-white">Get in touch</a>
          </button>
        </ul>

        {/* Hamburger icon (mobile) */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src={Images.hamburgerMenu} alt="Menu" className="h-8 w-8 cursor-pointer" />
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center space-y-8
          transition-all duration-300 ease-in-out z-40
          ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'}
        `}
      >
        <a href="#Header" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-800">Benefits</a>
        <a href="#Header" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-800">Testimonials</a>
        <a href="#Header" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-800">FAQ</a>
        <a href="#Header" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">Get in touch</a>
      </div>
    </div>
  );
};

export default Navbar;