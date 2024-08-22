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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1
    );
  };

  const openModal = () => {
    if (window.innerWidth < 1024) { // Detect small screens
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="portfolio" className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-5xl font-bold text-center text-blue-400 mb-8">
        Explore Our Latest Work
      </h2>
      <p className="text-lg text-gray-300 text-center mb-12">
        Discover how we bring ideas to life with our diverse portfolio. From creative designs to impactful campaigns, see how our expertise can elevate your brand and drive success.
      </p>
        <div className="carousel flex flex-col lg:flex-row lg:justify-between items-center bg-gray-800 shadow-xl rounded-lg p-8 transition-all duration-300 ease-in-out">
          <div className="flex justify-center items-center mb-8 lg:mb-0 lg:w-1/2 mx-auto">
            <img
              onClick={openModal}
              src={portfolioItems[currentIndex].image}
              alt={portfolioItems[currentIndex].title}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
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
                Previous
              </button>
              <button
                onClick={handleNext}
                className="relative bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Next
              </button>
            </div>
          </div>
        </div>   

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="relative">
              <img
                src={portfolioItems[currentIndex].image}
                alt={portfolioItems[currentIndex].title}
                className="w-full h-auto max-w-full lg:max-w-2xl rounded-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2 hover:bg-red-600 focus:outline-none"
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
