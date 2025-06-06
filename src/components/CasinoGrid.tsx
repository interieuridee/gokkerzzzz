import React from 'react';

const casinoLogos = [
  '365', '711', '777', 'bet mgm', 'betcity', 'betnation', 
  'bingoal', 'circus', 'comeon', 'fairplay casino', 'ggpoker',
  'goldrun casino', 'hardrock casino', 'holland casino', 'hommerson',
  'jacks casino', 'kansino', 'leovegas', 'lucky 7 casino', 'one casino',
  'scori pro', 'tonybet', 'toto', 'unibet', 'vbet', 'winnit', 'ze bet'
].filter(logo => !logo.includes('gokkerz'));

const CasinoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-6">
      {casinoLogos.map((logo) => (
        <div 
          key={logo}
          className="group relative aspect-square transform transition-all duration-300 hover:-translate-y-1"
        >
          <div 
            className="absolute inset-0 rounded-[10%] bg-black/5 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
            aria-hidden="true"
          />
          <img
            src={`/casinologos/casilogos/${logo}.svg`}
            alt={logo}
            className="relative h-full w-full rounded-[10%] bg-white object-contain p-3 shadow-[0_2px_10px_rgb(0,0,0,0.08)] transition-all duration-300 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default CasinoGrid;
