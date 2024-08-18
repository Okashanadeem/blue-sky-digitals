import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Do you have a project in mind?</h2>
        <form action="mailto:okashanadeem0101@gmail.com" method="post" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="p-2 border rounded w-full" />
            <input type="email" placeholder="E-Mail" className="p-2 border rounded w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Mobile Number" className="p-2 border rounded w-full" />
            <select className="p-2 border rounded w-full">
              <option>Select a Service</option>
              <option>Google Ads & Facebook Ads</option>
              <option>Web Development</option>
              <option>Graphic Designing</option>
              <option>Social Media Marketing</option>
              <option>Video Editing</option>
            </select>
          </div>
          <textarea placeholder="Message" className="p-2 border rounded w-full" rows="4"></textarea>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
