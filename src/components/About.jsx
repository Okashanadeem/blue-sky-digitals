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
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 uppercase tracking-wide leading-tight animate__animated animate__fadeInDown text-left">
          Transforming <br /> Ideas into <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Digital Realities</span>
        </h2>

        <div className="text-right">
          <div className="max-w-3xl mx-auto text-justify" style={{ marginLeft: '40%', paddingLeft: '40px' }}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-10 leading-relaxed font-light italic text-white transition duration-300 ease-in-out hover:animate-pulse group">
              "Digital creativity is in our <span className="text-white group-hover:text-purple-600 transition-colors duration-300 ease-in-out">DNA</span>. We provide <span className="text-white group-hover:text-red-500 transition-colors duration-300 ease-in-out">innovative marketing solutions</span> that not only solve <span className="text-white group-hover:text-teal-500 transition-colors duration-300 ease-in-out">today's challenges</span> but also position your brand for <span className="text-white group-hover:text-indigo-600 transition-colors duration-300 ease-in-out">future success</span>, delivering measurable <span className="text-white group-hover:text-sky-400 transition-colors duration-300 ease-in-out">results</span> now and ahead."
            </p>
          </div>
        </div>



        <div
          className="bg-gradient-to-r from-gray-900 via-black to-gray-900 p-10 sm:p-12 md:p-16 lg:p-20 xl:p-24 rounded-lg shadow-lg"
          style={{ height: '500px' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start h-full">
            <div className="w-full md:w-1/2">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white text-left">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">"Unlock</span> your potential<br />
                with our <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">cutting-edge</span><br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">digital solutions</span>."
              </p>
            </div>


            <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
              <div className="count-container bg-gradient-to-r from-gray-700 to-gray-900 text-blue-200 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500">
                <CountUp endValue={5} prefix="" />
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium mt-2">Happy Clients</p>
              </div>
              <div className="count-container bg-gradient-to-r from-gray-700 to-gray-900 text-cyan-200 p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-emerald-700 hover:to-cyan-500">
                <CountUp endValue={5} prefix="" />
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium mt-2">Projects Completed</p>
              </div>
              <div className="count-container bg-gradient-to-r from-gray-700 to-gray-900 text-violet-300 p-6 sm:p-7 md:p-8 lg:p-9 xl:p-10 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-violet-500 hover:to-indigo-500">
                <CountUp endValue={3} prefix="+" />
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium mt-2">Team Members</p>
              </div>
              <div className="count-container bg-gradient-to-r from-gray-700 to-gray-900 text-pink-300 p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500">
                <CountUp endValue={1015} prefix="$" />
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl font-medium mt-2">Earned Till Now</p>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            Why Choose Us
            <span className="text-white hover:text-red-600 transition-colors duration-300 ease-in-out">?</span>
          </h3>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-3xl mx-0 ml-auto text-justify leading-relaxed">
            We provide exceptional services with a dedicated team of experts committed to delivering quality, efficiency, and creativity in every project.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
