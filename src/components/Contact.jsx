import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    message: ''
  });

  const [showAlert, setShowAlert] = useState(false);  // Modal visibility state
  const [alertMessage, setAlertMessage] = useState('');  // Alert message

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_cvu8z5k',
      'template_408h2pq',
      formData,
      'TrKHUsB1PmZCeWoYx'
    ).then((result) => {
      console.log(result.text);
      setAlertMessage("Message Sent Successfully! We will contact you soon.");
      setShowAlert(true);
    }, (error) => {
      console.log(error.text);
      setAlertMessage("Failed to Send Message. Please try again.");
      setShowAlert(true);
    });

    setFormData({
      name: '',
      email: '',
      mobile: '',
      service: '',
      message: ''
    });
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <section id="contact" className="relative p-8 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-12 leading-tight">
          Do you have a project in mind?
        </h2>
        <form
          onSubmit={handleSubmit}
          className="relative space-y-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-10 shadow-2xl rounded-lg border border-gray-700 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 border border-gray-600 rounded-lg w-full bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              className="p-4 border border-gray-600 rounded-lg w-full bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="p-4 border border-gray-600 rounded-lg w-full bg-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200"
              required
            />
            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="relative p-4 border border-gray-600 rounded-lg w-full bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 appearance-none"
                required
              >
                <option value="" className="text-gray-500">Select a Service</option>
                <option value="Google Ads & Facebook Ads">Google Ads & Facebook Ads</option>
                <option value="Web Development">Web Development</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Social Media Marketing">Social Media Marketing</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Search Engine Optimization">SEO</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="UI/UX Designing">UI/UX Designing</option>
              </select>

              {/* Custom Arrow Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <textarea
            name="message"
            placeholder="Define Your Project Details..."
            value={formData.message}
            onChange={handleChange}
            className="relative p-4 border border-gray-600 rounded-lg w-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 resize-none scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
            rows="6"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-700 text-white font-semibold text-lg py-3 rounded-lg w-full shadow-lg hover:shadow-xl hover:bg-gradient-to-l hover:from-indigo-700 hover:via-purple-800 hover:to-blue-600 transition-transform duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Modal Alert */}
      {showAlert && (
        <>
          {/* Background Blur */}
          <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 p-6 rounded-lg shadow-lg w-80 text-center">
              <h3 className="text-lg font-semibold text-white mb-4">{alertMessage}</h3>
              <button
                onClick={closeAlert}
                className="bg-white hover:bg-gray-100 text-gray-900 py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Contact;
