import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  { name: "Google Ads & Facebook Ads" },
  { name: "Web Development" },
  { name: "Graphic Designing" },
  { name: "Social Media Marketing" },
  { name: "Video Editing" }
];

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = () => {
    navigate("#contact");
  };

  return (
    <section id="services" className="p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white p-4 rounded hover:bg-blue-700 cursor-pointer"
              onClick={handleServiceClick}
            >
              {service.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
