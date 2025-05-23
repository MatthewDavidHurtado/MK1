import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full text-center py-6 md:py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-sky-700 tracking-tight">
        The Secret to Financial Overflow is to Birth Supernatural Expectation By Sowing Faith-Seeds.
      </h1>
      <p className="mt-3 text-lg md:text-xl text-slate-600 app-sans-serif">
        The Ultimate Shortcut to Wealth and Divine Authority Is Right Here (Watch This Video).
      </p>

      {/* Video Container */}
      <div className="mt-6 mb-4 md:mb-6 max-w-2xl mx-auto">
        <div style={{padding:"57.82% 0 0 0", position:"relative"}}>
          <video 
            controls
            style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}
            preload="metadata"
          >
            <source src="https://healvideos.s3.us-east-2.amazonaws.com/permanent_overflow_is_yours_already_-_claim_it.+(720p).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="mt-4 md:mt-6">
        <a 
          href="https://www.thereisnothingbutgod.com/tithing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base text-amber-600 hover:text-amber-700 hover:underline focus:outline-none focus:ring-1 focus:ring-amber-500 focus:ring-offset-1 rounded px-1 app-sans-serif transition-colors duration-150 ease-in-out"
          title="Plant your faith-seed (opens Allow Ministries tithing page in a new tab)"
        >
          'Plant your faith-seed. Birth supernatural expectation. Rest, in faith. Receive.'
        </a>
      </div>
    </header>
  );
};

export default Header;