'use client'

import LayoutContent from "@/components/layout/content";
import ProjectGrid from "@/components/projects/project-grid";
import CTACall from "@/components/sections/cta-call";
import ServicesSection from "@/components/sections/service-section";
import ThemeViewer from "@/components/sections/theme-viewer";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero/hero";
import { IconArrow } from "@/components/ui/icons";
import { InfiniteScroll } from "@/components/ui/infinite-scroll/infinite-scroll";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const categories = [
  { id: 1, name: 'Développement' },
  { id: 2, name: 'Design' },
  { id: 3, name: 'Booking' },
];

export default function Home() {

  
    const words = [
    "DÉVELOPPEMENT WEB",
    "DESIGN UI/UX",
    "MARKETING DIGITAL",
    "REFERENCEMENT",
    "E-COMMERCE",
  ];
  // Référence pour mesurer la hauteur du contenu gauche
  const leftContentRef = useRef<HTMLDivElement>(null);
  // État pour stocker la hauteur
  const [contentHeight, setContentHeight] = useState<number>(0);

  // Mesure la hauteur du contenu gauche
  useEffect(() => {
    if (leftContentRef.current) {
      setContentHeight(leftContentRef.current.offsetHeight);

      // Observer les changements de taille
      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setContentHeight(entry.target.offsetHeight);
        }
      });

      resizeObserver.observe(leftContentRef.current);

      // Nettoyage
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <div className="relative">
      <Hero className="">
        <div className="flex w-full">
          {/* Contenu gauche */}
          <motion.div 
            ref={leftContentRef}
            className="w-[60%] space-y-6 z-10 pr-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="uppercase text-xl tracking-wider">
              contact@ladigitoile.fr
            </span>
            <h1 className="text-7xl font-bold">
              DES SOLUTIONS
              SUR-MESURE POUR VOS PROJETS WEB
            </h1>
            <div className="flex gap-4 pt-4">
              <Button size="lg">Prendre RDV</Button>
              <Button size="lg" variant="outline">CONTACT</Button>
            </div>
          </motion.div>

          {/* Section vidéo */}
          <motion.div 
  className="w-[40%] relative group"
  style={{ height: contentHeight > 0 ? `${contentHeight}px` : '100%' }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  {/* Container externe avec bordure */}
  <div className="absolute inset-0 p-[20px] bg-[#BEE237] rounded-[40px] transition-transform duration-300 group-hover:scale-[1.02]">
    {/* Container interne pour la vidéo */}
    <div className="relative w-full h-full rounded-3xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]">
                <div className="w-14 h-14 !z-50 flex justify-center items-center bg-[#BEE237] absolute -bottom-2 rounded-tl-3xl -right-2">
                  <IconArrow className="text-black mt-1.5 ml-1.5  w-10 h-10"/>
      </div>
      {/* Vidéo */}
      <video
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/hero-home.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
  </div>
</motion.div>
        </div>
            <div className="relative -mx-10">
          <InfiniteScroll
            words={words}
            className="text-4xl mt-14 italic font-bold text-secondary"
          />
        </div>
      </Hero>
      <LayoutContent className="">
        
          
      

                <ServicesSection/>
          <CTACall />
         

        
        
        <ThemeViewer />
         <div className="flex w-full max-lg:flex-col gap-8 justify-between">
        {/* Titre et catégories */}
            <div className="space-y-4">
              <h1 className="text-7xl font-bold text-gray uppercase">
                Nos projets<b className="text-primary">.</b>
              </h1>
              <div className="flex gap-4 items-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="px-4 py-1.5 border font-[500] hover:bg-gray hover:text-secondary
                              border-gray/50 text-gray/50 transition-all duration-500 rounded-full"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

        {/* Description et CTA */}
                  <div className="w-1/3 max-lg:w-full">
                    <span className="text-gray/50 leading-9 text-xl">
                      Retrouvez nos projets web, nos créations graphiques et bien plus..
                    </span>
                    <Button 
                      variant="ghost" 
                      className="mt-4 flex group transition-all duration-500 hover:text-gray items-center gap-4 text-gray/50"
                    >
                      Voir plus
                      <Image 
                        src="/images/ghost-arrow.webp" 
                        alt="" 
                        width={24} 
                        height={24} 
                        className="w-6 transition-all duration-500 group-hover:opacity-95 invert opacity-45" 
                      />
                    </Button>
                    </div>
    
        </div>
        <ProjectGrid />
        
      </LayoutContent>
   
     
    </div>
  );
}