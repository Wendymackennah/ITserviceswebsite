// src/components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-12 bg-blue-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow-md">
            <p>"The best IT services we've ever used! Highly recommend."</p>
            <p className="mt-4 font-bold">- John Doe, CEO</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <p>"Professional, efficient, and reliable services every time."</p>
            <p className="mt-4 font-bold">- Jane Smith, Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
