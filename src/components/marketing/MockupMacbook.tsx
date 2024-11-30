'use client';

import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, Share2, X } from 'lucide-react';
import { AnalyticsPage, EcommercePage, Page3 } from './MacbookPages';
import Image from 'next/image';

const MockupMacbook = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [url, setUrl] = useState('https://analytics.google.com');

  const tabs = [
    { favicon: <Image src="/images/analytics.png" alt=' ' width="15" height="15" />, title: 'Analytics', url: 'https://analytics.google.com', component: <AnalyticsPage /> },
    { favicon: <Image src="/images/basket.png" alt=' ' width="15" height="15" />, title: 'E-commerce', url: 'https://store.example.com', component: <EcommercePage /> },
    { favicon: '📱', title: 'Page 3', url: 'https://example.com/page3', component: <Page3 /> }
  ];

  return (
    <div className="w-full">
      <div className="relative">
        {/* Encoche MacBook */}
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-48 h-6 bg-black rounded-b-2xl z-10">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-1.5 w-3 h-3 bg-black rounded-full border-2 border-secondary/20" />
        </div>

        <div className="bg-secondary/90 rounded-[24px] p-2.5 shadow-3xl">
          <div className="bg-black rounded-[20px] overflow-hidden">
            {/* Barre de titre */}
            <div className="h-8 bg-[#b7b7b7] flex items-center px-3 justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57] hover:brightness-90 cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:brightness-90 cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#28C840] hover:brightness-90 cursor-pointer" />
              </div>
              <div className="flex gap-1.5 items-center">
                <ChevronLeft className="w-4 h-4 text-[#5E5E5E] hover:text-white cursor-pointer" />
                <ChevronRight className="w-4 h-4 text-[#5E5E5E] hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Barre d'onglets */}
            <div className="h-12 bg-[#f0f0f0] flex items-center px-2 gap-2">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveTab(index);
                    setUrl(tab.url);
                  }}
                  className={`
                    group px-2.5 py-2 rounded-lg font-[600] text-xs flex items-center gap-2 cursor-pointer transition-all
                    ${activeTab === index 
                      ? 'bg-[#b7b7b7] text-white' 
                      : 'text-secondary bg-secondary/10 hover:bg-[#2C2C2E]/50'}
                  `}
                >
                  <span>{tab.favicon}</span>
                  <span>{tab.title}</span>
                  <X className="w-3 h-3 group-hover:opacity-100 text-white hover:scale-110" />
                </div>
              ))}
            </div>

            {/* Barre d'URL */}
            <div className="h-10 bg-[#e8e8e8] flex items-center px-3 !py-6 gap-3">
              <div className="flex-1">
                <div className="bg-white rounded-lg h-7 flex items-center px-3 gap-2 group focus-within:ring-1 focus-within:ring-blue-500">
                  <Search className="w-3.5 h-3.5 text-secondary group-focus-within:text-white" />
                  <input 
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="text-xs w-full font-[600] bg-transparent text-secondary focus:outline-none"
                  />
                </div>
              </div>
              <Share2 className="w-4 h-4 text-secondary hover:text-white cursor-pointer" />
            </div>

            {/* Contenu */}
            <div className="h-[432px] overflow-y-hidden scrollbar-hide bg-[#f0f0f0]">
              {tabs[activeTab].component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupMacbook;