import React from 'react';
import backgroundImage from '../assets/images/AboutBG.jpg';
import CountUp from './CountUp.jsx';

const About = () => {
  return (
    <section
      id="about"
      className="relative p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        animation: 'danceBg 60s ease-in-out infinite'
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">

        <h2 className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 uppercase tracking-wide leading-tight animate__animated animate__fadeInDown text-left">
          Transforming <br /> Ideas into <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Digital Realities</span>
        </h2>

        <div className="flex justify-center lg:justify-end group">
          <div className="w-full lg:w-1/2 p-6 sm:p-12 rounded-lg mb-18" style={{ marginRight: '0', paddingRight: '0', paddingBottom: '40px' }}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-normal text-center lg:text-left sm:mx-auto sm:pl-4 md:pl-6 lg:pl-8 xl:pl-10 text-white">
              "We provide <span className="text-white group-hover:text-sky-600 transition-colors duration-300 ease-in-out">innovative</span> digital solutions that drive <span className="text-white group-hover:text-indigo-500 transition-colors duration-300 ease-in-out">success</span> for your brand and future <span className="text-white group-hover:text-purple-600 transition-colors duration-300 ease-in-out">growth.</span>"
            </p>
          </div>
        </div>


        <div className="flex justify-center lg:justify-start mt-8 mb-14">
          <a
            href="#contact"
            className="inline-block px-10 py-5 bg-gradient-to-r from-purple-500 via-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:bg-gradient-to-l hover:from-blue-700 hover:to-purple-700 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Get a Quote</span>
            <span className="absolute inset-0 w-0 h-full bg-blue-700 transition-all duration-500 ease-in-out group-hover:w-full"></span>
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>



        <div
          className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-10 sm:p-12 md:p-16 lg:p-20 xl:p-24 rounded-lg shadow-2xl transition-shadow duration-500 ease-in-out"
          style={{ height: '500px' }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center h-full">
            <div className="w-full md:w-1/2">
              <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 font-semibold text-white">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">"Unlock</span> your potential<br />
                with our <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">cutting-edge</span><br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">digital solutions</span>."
              </p>
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 justify-center">
              <div className="count-container bg-gradient-to-r from-gray-700 to-gray-900 text-white p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 rounded-lg shadow-lg transition-transform duration-700 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:shadow-2xl">
                <CountUp style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }} endValue={5} />
                <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium mt-2">Happy Clients</p>
              </div>
              <div className="count-container bg-gradient-to-r from-gray-700 to-gray-900 text-white p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 rounded-lg shadow-lg transition-transform duration-700 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:shadow-2xl">
                <CountUp style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }} endValue={5} />
                <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium mt-2">Projects Completed</p>
              </div>
              <div className="count-container bg-gradient-to-r from-gray-700 to-gray-900 text-white p-6 sm:p-7 md:p-8 lg:p-9 xl:p-10 rounded-lg shadow-lg transition-transform duration-700 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:shadow-2xl">
                <CountUp style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }} endValue={3} prefix="+" />
                <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium mt-2">Team Members</p>
              </div>
              <div className="count-container bg-gradient-to-r from-gray-700 to-gray-900 text-white p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 rounded-lg shadow-lg transition-transform duration-700 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:shadow-2xl">
                <CountUp style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }} endValue={1015} prefix="$" />
                <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium mt-2">Earned Till Now</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            <span className="text-white hover:text-red-600 transition-colors duration-300 ease-in-out">Why Choose Us?</span>
          </h3>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-3xl mx-auto text-justify leading-relaxed">
            We provide exceptional services with a dedicated team of experts committed to delivering quality, efficiency, and creativity in every project.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
