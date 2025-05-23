import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <header className="w-full text-center py-6 md:py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight">
        The Secret to Financial Overflow<br />
        is to Birth Supernatural Expectation<br />
        By Sowing Faith-Seeds With Love.
      </h1>
      <p className="mt-3 text-lg md:text-xl text-slate-600 app-sans-serif">
        The Ultimate Shortcut to Wealth and Divine Authority Is Right Here (Watch This Video).
      </p>

      {/* Video Container */}
      <div className="mt-6 mb-4 md:mb-6 max-w-2xl mx-auto">
        <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{padding:"57.82% 0 0 0"}}>
          <video 
            controls
            style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}
            preload="metadata"
            poster="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg"
            className="object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="https://healvideos.s3.us-east-2.amazonaws.com/permanent_overflow_is_yours_already_-_claim_it.+(720p).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all duration-300">
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-blue-600 border-b-[15px] border-b-transparent ml-2"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 md:mt-6">
        <a 
          href="https://www.thereisnothingbutgod.com/tithing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 app-sans-serif text-base md:text-lg font-medium"
          title="Plant your faith-seed (opens Allow Ministries tithing page in a new tab)"
        >
          Plant your faith-seed. Birth supernatural expectation. Rest, in faith. Receive.
        </a>
      </div>
    </header>
  );
};

export default Header;