import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-2 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Logo" className="w-32 h-auto logo transition-transform duration-300 ease-in-out" />
        </a>
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#services" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none md:hidden">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none md:hidden">
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center bg-gray-800 text-white p-4">
          <a href="#services" className="py-2 text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#about" className="py-2 text-gray-300 hover:text-white">
            About
          </a>
          <a href="#contact" className="py-2 text-gray-300 hover:text-white">
            Contact
          </a>
          <div className="mt-8 flex space-x-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
