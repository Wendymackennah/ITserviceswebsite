// src/pages/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">Have any questions? Feel free to reach out to us!</p>
        <form className="mt-8">
          <input type="text" className="border p-2 mb-4 w-full" placeholder="Your Name" />
          <input type="email" className="border p-2 mb-4 w-full" placeholder="Your Email" />
          <textarea className="border p-2 mb-4 w-full" rows="5" placeholder="Your Message"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
