'use client'

import React, { useState } from 'react';
import { Hero } from '@/components/ui/hero/hero';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import LayoutContent from '@/components/layout/content';
import { InfiniteScroll } from '@/components/ui/infinite-scroll/infinite-scroll';
import { services } from '@/components/marketing/data';


export default function Marketing() {
  const [activeService, setActiveService] = useState<string>('gtm');
  const activeContent = services.find(s => s.id === activeService) || services[0];
    
  const words = [
    "DÉVELOPPEMENT WEB",
    "DESIGN UI/UX",
    "MARKETING DIGITAL",
    "REFERENCEMENT",
    "E-COMMERCE",
  ];
    
  return (
    <>
      <Hero className='relative'>
        <div className='absolute bottom-0 left-0 bg-gradient-to-t z-[2] from-black/40 to-transparent w-full h-80 max-md:h-20'/>
        <Image 
          src='/images/projects/marketing.png' 
          width={800} 
          height={800} 
          alt='' 
          className='w-full object-contain -mb-10 max-md:-mt-8 object-top h-auto max-md:scale-110 z-[1]' 
        />
      </Hero>

      <InfiniteScroll
        words={words}
        className="text-4xl text-primary max-md:text-3xl mt-14 max-md:mt-10 italic font-bold"
      />

      <LayoutContent>
        <div className="py-0">
          <div className="grid max-lg:flex max-sm:flex-col grid-cols-3 gap-0">

            <div className="h-[412px] scrollbar-hide max-sm:flex max-lg:h-full min-w-[120px]  border-t border-gray/20 overflow-y-auto border-y scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/40">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`
                    relative p-8 max-sm:p-6 max-lg:w-max transition-all duration-300 cursor-pointer border-b border-gray/10 last:border-b-0
                    h-[103px] max-sm:w-full max-sm:border-b-0 max-sm:first:border-l max-md:border-r max-md:h-max flex items-center group
                    ${activeService === service.id 
                      ? 'bg-gray/5' 
                      : 'hover:bg-gray/5'
                    }
                  `}
                >
                  <div className="flex max-md:mx-auto items-start gap-4 relative z-10">
                    <div className={`
                      p-3  transition-all duration-300 rounded-lg
                      ${activeService === service.id 
                        ? 'bg-primary' 
                        : 'bg-gray/5 group-hover:bg-gray/10'
                      }
                    `}>
                      <div className={
                        activeService === service.id 
                          ? 'text-secondary' 
                          : 'text-gray opacity-40 group-hover:opacity-100 group-hover:text-gray'
                      }>
                        <service.icon className="w-8 h-8 max-sm:w-6 max-sm:h-6" />
                      </div>
                    </div>
                    <div className="flex-1 max-lg:hidden">
                      <h4 className={`
                        text-xl font-bold mb-1.5 transition-colors duration-300
                        ${activeService === service.id 
                          ? 'text-gray' 
                          : 'text-gray/20 group-hover:text-gray'
                        }
                      `}>
                        {service.title}
                      </h4>
                      <p className={`
                        text-sm transition-colors duration-300
                        ${activeService === service.id 
                          ? 'text-gray/60' 
                          : 'text-gray/20 font-[500] group-hover:text-gray/80'
                        }
                      `}>
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  {activeService === service.id && (
                    <div className="absolute left-0 max-sm:!bottom-0 max-sm:w-full max-sm:h-1 top-0 bottom-0 w-1  bg-primary"/>
                  )}
                </div>
              ))}
            </div>

            <div className="col-span-2  overflow-scroll border-y bg-gray/5 border-gray/10 max-md:p-8 p-12 max-lg:h-auto h-[412px] transition-colors group relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className='flex  justify-between max-lg:gap-12 max-md:gap-6 gap-20'>
                    <div>
                      <div className="flex  mb-4 items-center gap-4">
                        <div>
                          <h3 className="text-3xl font-bold text-gray">
                            {activeContent.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray/60 font-[500] text-lg">
                        {activeContent.fullDescription}
                      </p>
                    </div>

                    <div className=''>
                      <div className="grid grid-cols-2 max-md:grid-cols-1 w-max gap-2">
                        {activeContent.platforms.map((platform, index) => (
                          <motion.div
                            key={platform.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className=""
                          >
                            <div className="p-2 w-9 h-9 bg-gray/5 rounded-lg hover:bg-gray/10 transition-colors">
                              <platform.icon className="w-5 h-5 text-gray/60" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                        
           <div className="flex max-md:flex-col gap-6 mb-8">
  {activeContent.highlights.map((highlight, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative py-3 w-max px-4 max-md:w-full rounded-2xl overflow-hidden group cursor-pointer flex-1 border border-white/5 transform hover:-translate-y-1 transition-all duration-300 bg-transparent"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gray/10">
            <highlight.icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-gray font-semibold">
              {highlight.title}
            </h4>
            <p className="text-gray/60">
              {highlight.metric}
              <span className="text-green-500 ml-2 text-sm">
                +{highlight.trend}%
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </motion.div>
  ))}
</div>

   
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </LayoutContent>
    </>
  );
}