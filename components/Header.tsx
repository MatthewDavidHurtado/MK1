
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

      {/* Vimeo Video Embed */}
      <div className="mt-6 mb-4 md:mb-6 max-w-2xl mx-auto">
        <div style={{padding:"57.82% 0 0 0", position:"relative"}}>
          <iframe 
            src="https://player.vimeo.com/video/1087098760?h=a856447905&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
            style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
            title="Permanent Overflow Is Yours Already - Claim It."
            allowFullScreen
          ></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
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
