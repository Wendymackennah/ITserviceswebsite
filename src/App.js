
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '/home/wendymackennah/ITserviceswebsite/it-services-website/src/Components /Navbar.js';
import Footer from '/home/wendymackennah/ITserviceswebsite/it-services-website/src/Components /Footer.js';
import Home from '/home/wendymackennah/ITserviceswebsite/it-services-website/src/Pages/Home.js';
import About from '/home/wendymackennah/ITserviceswebsite/it-services-website/src/Pages/About.js';
import Contact from '/home/wendymackennah/ITserviceswebsite/it-services-website/src/Pages/Contact.js';
import Products from '/home/wendymackennah/ITserviceswebsite/it-services-website/src/Pages/Products.js';  // Import the Products page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} /> {/* Add Products route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
