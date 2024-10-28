// src/pages/Home.js
import React from 'react';
import HeroSection from '/home/wendymackennah/ITserviceswebsite/it-services-website/src/Components /HeroSection.js';
import Services from '/home/wendymackennah/ITserviceswebsite/it-services-website/src/Components /Services.js';
import Testimonials from '/home/wendymackennah/ITserviceswebsite/it-services-website/src/Components /Testimonials.js';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;
