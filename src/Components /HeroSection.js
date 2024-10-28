// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-800 text-white h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Top-notch IT Services</h1>
        <p className="text-lg mb-8">We provide solutions that drive your business forward.</p>
        <a href="/contact" className="bg-blue-600 px-4 py-2 rounded">Get Started</a>
      </div>
    </section>
  );
};

export default HeroSection;
