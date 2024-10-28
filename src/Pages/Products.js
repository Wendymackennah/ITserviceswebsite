import React from 'react';

// Sample data for products
const products = [
  {
    id: 1,
    name: 'Laptop X300',
    description: 'High-performance laptop for professionals.',
    price: '$1200',
    image: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: 2,
    name: 'Gaming Keyboard',
    description: 'RGB mechanical keyboard for gamers.',
    price: '$150',
    image: 'https://via.placeholder.com/150', 
  },
  {
    id: 3,
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with fast response time.',
    price: '$80',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Monitor 4K Ultra',
    description: 'Crisp 4K display for sharp visuals.',
    price: '$600',
    image: 'https://via.placeholder.com/150',
  },
];

const Products = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-blue-600 font-bold">{product.price}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
