// src/components/Services.js
import React from 'react';

const Services = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p>Building responsive, modern websites to meet your business needs.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">IT Consultancy</h3>
            <p>Providing professional advice to improve your IT infrastructure.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-xl font-bold mb-4">Cloud Solutions</h3>
            <p>Implementing scalable cloud services for your business operations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
