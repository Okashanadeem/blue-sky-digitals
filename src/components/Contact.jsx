import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email sending logic here
    alert("Message sent!");
  };

  return (
    <section id="contact" className="p-8">
      <h2 className="text-2xl font-bold mb-4">Do you have a project in mind?</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className="border p-2 w-full"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="border p-2 w-full"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="text"
            name="phone"
            className="border p-2 w-full"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Project:</label>
          <select
            name="service"
            className="border p-2 w-full"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Google Ads & Facebook Ads">Google Ads & Facebook Ads</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="Social Media Marketing">Social Media Marketing</option>
            <option value="Video Editing">Video Editing</option>
          </select>
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            className="border p-2 w-full"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
