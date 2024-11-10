

  import React from 'react';
import Header from './components/header';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     
      <Header />

     
      <main className="p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <img src="http://localhost:3001" alt="Product 1" className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-lg font-bold mt-4">Product 1</h3>
            <p className="text-gray-600 mt-2">This is a brief description of the product.</p>
            <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
              Buy Now
            </button>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <img src="https://icms-image.slatic.net/images/ims-web/5a0dbef9-dd13-4305-a6f3-9783c72cc72d.jpg" alt="Product 2" className="w-1060 h-1084 object-cover rounded-t-lg" />
            <h3 className="text-lg font-bold mt-4">Product 2</h3>
            <p className="text-gray-600 mt-2">This is a brief description of the product.</p>
            <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
              Buy Now
            </button>
          </div>

          <div className="p-4 bg-white shadow-md rounded-lg">
            <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1bi._d8LoK1RjSZFuXXXn0XXa.jpg_1200x1200q75.jpg_.webp" alt="Product 3" className="w-750 h-750 object-cover rounded-t-lg" />
            <h3 className="text-lg font-bold mt-4">Product 3</h3>
            <p className="text-gray-600 mt-2">This is a brief description of the product.</p>
            <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
              Buy Now
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Your Store. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
