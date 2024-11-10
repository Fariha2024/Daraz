// components/HeroSection.tsx

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[688px]">
      {/* Hero section with a background image */}
      <div
        className="h-full min-w-2.5 flex bg-cover bg-flex"
        style={{ backgroundImage: 'url(https://th.bing.com/th?id=ORMS.c0fe67df28c412e7a89fb4ca91061f9a&pid=Wdp&w=612&h=304&qlt=90&c=1&)' }} // Update with your provided image path
      >
        <div
        className="relative w-full high  flex bg-cover bg-center"
        style={{ backgroundImage: 'url(https://img.lazcdn.com/us/domino/15ca3012-81c3-4e0e-9369-dd521a0bf0a5_PK-1976-688.jpg_2200x2200q80.jpg_.webp)' }} // Update with your provided image path
      ></div>
        {/* Dark overlay to highlight text */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-extrabold">
            Welcome to Daraz
          </h1>
        </div>
      </div>

      {/* Horizontal scrolling images directly below */}
      <div className="absolute bottom-0 w-full flex space-x-4 overflow-x-auto p-4 bg-white bg-opacity-90">
        {/* Scrolling images */}
        <img
          src="https://website-prod.cache.wpscdn.com/img/banner_left.d13d3e9.png"
          className="h-32 w-56 object-cover rounded"
          alt="Image 1"
        />
        <img
          src=""
          className="h-32 w-56 object-cover rounded"
          alt="Image 1"
        />
        
        <img
          src="https://th.bing.com/th?id=ORMS.882adc3bb7d307650b6ec493784f7da2&pid=Wdp&w=268&h=140&qlt=90&c=1&rs=1&dpr=1&p=0"
          className="h-32 w-56 object-cover rounded"
          alt="Image 2"
        />
        <img
          src="https://img.lazcdn.com/us/domino/15ca3012-81c3-4e0e-9369-dd521a0bf0a5_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
          className="h-32 w-56 object-cover rounded"
          alt="Image 3"
        />

<img
          src="https://img.drz.lazcdn.com/static/pk/p/8dceec00f8c6cabbdacb37195f0f6933.jpg_200x200q80.jpg_.webp"
          className="h-32 w-56 object-cover rounded"
          alt="Image 4"
        />
      </div>
    </div>
  );
};

export default HeroSection;
