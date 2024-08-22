import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 bg-opacity-70 text-white shadow-md fixed top-0 w-full z-50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-yellow-300">About</a>
          <a href="#services" className="hover:text-yellow-300">Services</a>
          <a href="#portfolio" className="hover:text-yellow-300">Portfolio</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </div>

        {/* Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none text-yellow-300 hover:text-yellow-500 transition duration-300"
        >
          {isOpen ? '✖️' : '☰'}
        </button>

        {/* Small Sliding Menu */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-gradient-to-b from-gray-800 to-gray-900 text-white md:hidden transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out z-40`}
        >
          <div className="flex flex-col items-center mt-10 space-y-8">
            <a
              href="#about"
              className="text-2xl hover:text-yellow-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-2xl hover:text-yellow-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-2xl hover:text-yellow-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-2xl hover:text-yellow-300 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
