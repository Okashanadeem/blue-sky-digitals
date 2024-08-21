import React, { useState } from 'react';
import SEO from '../assets/images/SEO.jpg';
import GraphicDeigningPortfolio from '../assets/images/GraphicDeigningPortfolio.jpg'; 
import GoogleAdPortfolio from '../assets/images/GoogleAdPortfolio.jpg';
import EcommercePotfolio from '../assets/images/EcommercePotfolio.jpg';
import WebsiteDevelopmentPortfolio from '../assets/images/WebsiteDevelopmentPortfolio.png';

const portfolioItems = [
  { title: 'SEO Project', description: 'Comprehensive SEO strategy for client website.', image: SEO },
  { title: 'Graphic Designing', description: 'Creative designs tailored to brand identity.', image: GraphicDeigningPortfolio },
  { title: 'Google Ads Campaign', description: 'Effective ad campaigns that deliver results.', image: GoogleAdPortfolio },
  { title: 'E-commerce Platform', description: 'Built a scalable e-commerce website.', image: EcommercePotfolio },
  { title: 'Website Development', description: 'Built an attractive website with us!', image: WebsiteDevelopmentPortfolio }
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="portfolio" className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-5xl font-bold text-center text-blue-400 mb-12">Our Portfolio</h2>
        <div className="carousel flex flex-col lg:flex-row lg:justify-between items-center bg-gray-800 shadow-xl rounded-lg p-8 transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-center mb-8 lg:mb-0 lg:w-1/2 mr-10">
            <img
              src={portfolioItems[currentIndex].image}
              alt={portfolioItems[currentIndex].title}
              className="w-full h-96 object-cover rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-4xl font-semibold text-yellow-400 mb-6">
              {portfolioItems[currentIndex].title}
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              {portfolioItems[currentIndex].description}
            </p>
            <div className="flex justify-between items-center space-x-6">
              <button
                onClick={handlePrevious}
                className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <span className=" inset-0 bg-blue-700 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"></span>
                Previous
              </button>
              <button
                onClick={handleNext}
                className="relative bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <span className=" inset-0 bg-green-700 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"></span>
                Next
              </button>
            </div>
          </div>
        </div>   
      </div>
    </section>
  );
};

export default Portfolio;
