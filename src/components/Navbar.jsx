import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 fixed w-full z-10 top-0">
      <ul className="flex justify-around text-white">
        <li>
          <a href="#about" className="hover:text-gray-300">About</a>
        </li>
        <li>
          <a href="#services" className="hover:text-gray-300">Services</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
