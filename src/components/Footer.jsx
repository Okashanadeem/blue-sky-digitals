import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and GitHub Link */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <Link to="./" className="text-white font-bold text-xl hover:text-gray-300 transition-colors duration-300">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* GitHub Link */}
          <a
            href="https://github.com/Okashanadeem/blue-sky-digitals"
            className="flex items-center text-gray-400 hover:text-indigo-700 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 mr-2" />
            <span>Live Code</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 md:mt-0 md:text-left md:pr-20">
          <span className="text-gray-500">
            Feel Free to Contact with Us!
          </span>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=61557534717229&mibextid=ZbWKwL"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/blueskydigitals786?igsh=MWo2eWtldnBmanprNw=="
            className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/+923343677490"
            className="text-gray-400 hover:text-green-500 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="my-6 border-gray-700" />
      
      {/* Footer Bottom */}
      <div className="text-center mt-4">
        <span className="text-gray-500">
          All rights reserved &copy; 2024
        </span>
      </div>
    </footer>
  );
};

export default Footer;
