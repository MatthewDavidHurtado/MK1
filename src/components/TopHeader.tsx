import React from 'react';

const TopHeader: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-8">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="w-full md:w-1/3">
          <img
            src="https://imgur.com/bPuBzqZ.jpg"
            alt="Free Ebook: You Can Heal Yourself and Be Free!"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            You Can Heal Yourself and Be Free!
          </h1>
          <a 
            href="https://www.thereisnothingbutgod.com/offers/wFkCkNJN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 font-bold text-lg glow-button"
          >
            Click Here to Get My eBook Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;