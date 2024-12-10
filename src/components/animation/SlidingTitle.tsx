import React from 'react';

const SlidingTitle = () => {
  return (
    <div className="w-full">
      <div className="space-y-1">
        <h2 className="smart-title max-xs:text-4xl text-3xl  font-black">DES SOLUTIONS</h2>
        <h2 className="smart-title max-xs:text-4xl text-3xl font-black">SUR-MESURE POUR</h2>
        
        <div className="content relative h-[60px] max-xs:h-[30px] max-md:h-[50px] max-md:-ml-1 max-md:-mr-10 overflow-hidden font-cd text-[35px] leading-[40px] text-secondary">
          <div className="content-container relative max-xs:h-[30px] max-md:h-[50px] h-[60px] overflow-hidden">
            <ul className="m-0 italic smart-title max-xs:text-4xl font-black text-left list-none animate-change">
              <li className="leading-[70px] max-md:leading-[50px]  max-xs:leading-[35px] m-0">UN SITE WEB</li>
              <li className="leading-[70px] max-md:leading-[50px] max-xs:leading-[35px] m-0">UNE BOUTIQUE</li>
              <li className="leading-[70px] max-md:leading-[50px] max-xs:leading-[35px] m-0">VOTRE PUB</li>
              <li className="leading-[70px] max-md:leading-[50px] max-xs:leading-[35px] m-0">VOS DESIGN</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingTitle;