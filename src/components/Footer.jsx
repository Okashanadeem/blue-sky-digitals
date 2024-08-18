import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center space-y-4">
        <div className="space-x-4">
          <a href="https://facebook.com" className="hover:underline">Facebook</a>
          <a href="https://instagram.com" className="hover:underline">Instagram</a>
          <a href="https://youtube.com" className="hover:underline">YouTube</a>
        </div>
        <div className="space-x-4">
          <span>Services: Google Ads, Web Development, Graphic Design</span>
        </div>
        <div>
          <a href="mailto:okashanadeem0101@gmail.com" className="hover:underline">okashanadeem0101@gmail.com</a>
        </div>
        <div>
          <span>All rights reserved &copy; 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
