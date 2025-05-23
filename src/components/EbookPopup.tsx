import React, { useState, useEffect } from 'react';

const EbookPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show popup after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          ×
        </button>
        
        <div className="text-center">
          <img 
            src="https://imgur.com/bPuBzqZ.jpg" 
            alt="Free Ebook" 
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get Your FREE Ebook Now!
          </h2>
          <p className="text-gray-600 mb-6">
            Discover the divine principles that unlock supernatural abundance in your life.
          </p>
          <a
            href="https://www.thereisnothingbutgod.com/offers/wFkCkNJN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full py-3 px-6 bg-amber-400 hover:bg-amber-500 text-black rounded-lg shadow-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 font-medium"
            onClick={() => setIsVisible(false)}
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default EbookPopup;