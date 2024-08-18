
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
      <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 uppercase tracking-wide leading-tight animate__animated animate__fadeInDown">
          Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Digital Realities</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 max-w-3xl mx-auto leading-relaxed font-light italic animate__animated animate__fadeInUp">
          "Digital creativity is in our DNA. We provide innovative marketing solutions that not only solve today's challenges but also position your brand for future success, delivering measurable results now and ahead."
        </p>
{/* <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 max-w-3xl mx-auto leading-relaxed font-light italic text-white transition duration-300 ease-in-out hover:animate-pulse group">
  "Digital creativity is in our <span className="text-blue-500 group-hover:text-purple-600 transition-colors duration-300 ease-in-out">DNA</span>. We provide <span className="text-yellow-400 group-hover:text-red-500 transition-colors duration-300 ease-in-out">innovative marketing solutions</span> that not only solve <span className="text-green-400 group-hover:text-teal-500 transition-colors duration-300 ease-in-out">today's challenges</span> but also position your brand for <span className="text-pink-500 group-hover:text-indigo-600 transition-colors duration-300 ease-in-out">future success</span>, delivering measurable results now and ahead."
</p> */}


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
          <div className="count-container bg-white text-blue-700 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <CountUp endValue={5} prefix="" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium mt-2">Happy Clients</p>
          </div>
          <div className="count-container bg-white text-cyan-950 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <CountUp endValue={5} prefix="" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium mt-2">Projects Completed</p>
          </div>
          <div className="count-container bg-white text-violet-500 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <CountUp endValue={3} prefix="+" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium mt-2">Team Members</p>
          </div>
          <div className="count-container bg-white text-pink-700 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <CountUp endValue={1015} prefix="$" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium mt-2">Earned Till Now</p>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 underline decoration-wavy decoration-blue-500">
            Why Choose Us?
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-3xl mx-auto leading-relaxed">
            We provide exceptional services with a dedicated team of experts committed to delivering quality, efficiency, and creativity in every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
