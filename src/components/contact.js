import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page p-6 md:p-10">
      <h1 className="text-3xl font-bold text-center mb-4 mt-10">Contact Us</h1>
      <p className="text-lg text-center mb-6">
        Have questions or feedback? We'd love to hear from you!
      </p>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input type="text" id="name" className="border rounded w-full py-2 px-3" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input type="email" id="email" className="border rounded w-full py-2 px-3" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea id="message" className="border rounded w-full py-2 px-3" placeholder="Your Message" rows="4"></textarea>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;
