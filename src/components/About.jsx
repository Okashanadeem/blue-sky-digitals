import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="mb-4">
          We are a digital service provider dedicated to helping businesses grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">5</h3>
            <p>Happy Clients</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">5</h3>
            <p>Projects Completed</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">3+</h3>
            <p>Team Members</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">$1015</h3>
            <p>Earned Till Now</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
          <p>We provide exceptional services with a dedicated team of experts.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
