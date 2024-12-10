'use client'

import SlidingTitle from "@/components/animation/SlidingTitle";
import LayoutContent from "@/components/layout/content";
import ProjectGrid from "@/components/projects/project-grid";
import ReviewAnimated from "@/components/animation/review/ReviewAnimated";
import CTACall from "@/components/sections/cta-call";
import ServicesSection from "@/components/sections/service-section";
import ThemeViewer from "@/components/sections/theme-viewer/theme-viewer";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero/hero";
import { IconArrow } from "@/components/ui/icons";
import { InfiniteScroll } from "@/components/ui/infinite-scroll/infinite-scroll";
import { AtSign } from "lucide-react";
import Link from "next/link";
import { type Review } from "@/components/animation/review/types";
import { useRef, useEffect, useState } from "react";

export default function Home() {
 const reviews: Review[] = [
    {
      name: "John D.",
     avatar: "/images/face1.png",
      reviewDescription:"J'ai beaucoup aimé l'accompagnement offert lors du lancement de mon business",
      date: "2024",
      rating: "5"
    },
    {
      name: "Jane L.",
      avatar: "/images/face2.png",
      reviewDescription:"J'ai beaucoup aimé l'accompagnement offert lors du lancement de mon business",
      date: "2024",
      rating: "4"
    }
  ];
  const words = [
    "DÉVELOPPEMENT WEB",
    "DESIGN UI/UX",
    "MARKETING DIGITAL",
    "REFERENCEMENT",
    "E-COMMERCE",
  ];

  // Spécifier explicitement le type HTMLDivElement
  const leftContentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (leftContentRef.current) {
      // Forcer le type avec as HTMLDivElement si nécessaire
      const element = leftContentRef.current as HTMLDivElement;
      setContentHeight(element.offsetHeight);

      const resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          // Utiliser getBoundingClientRect() pour plus de compatibilité
          const height = entry.target.getBoundingClientRect().height;
          setContentHeight(height);
        }
      });

      resizeObserver.observe(element);

      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <div className="relative">
      <Hero className="w-full">
 <div className="flex flex-col h-full">
   <div className="flex gap-6 flex-1 max-lg:flex-col max-md:gap-14 max-sm:gap-10 w-full">
     {/* Contenu gauche */}
     <div
       ref={leftContentRef}
       className="w-[60%] max-lg:w-full space-y-10 max-md:space-y-8 z-10 max-md:pr-0 pr-8"
     >
       <div
         className="inline-flex -mb-4 backdrop-blur-xl font-[500] overflow-hidden items-center gap-2 anim-black-bg border border-secondary/5 hover:bg-secondary/5 group tracking-widest transition-all duration-500 bg-secondary/10 rounded-full max-md:px-1.5 max-md:p-1  p-1.5 px-2"
              >
                                  <span className="bg-secondary text-white font-[500] max-xs:text-xs max-md:text-sm text-base p-1.5 max-md:p-[5px] flex justify-center items-center leading-none rounded-full"><AtSign className="w-3.5 h-3.5" /></span>

         <span className="text-md  font-[600] max-md:pl-0 pl-0.5 px-3  max-md:text-sm  uppercase text-secondary/80">
           contact@digitoile.fr
         </span>
       </div>
      <SlidingTitle/>
<ReviewAnimated reviews={reviews} />
       <div className="flex max-md:gap-6 max-lg:pt-2 gap-8">
          <Button
            onClick={() => window.Calendly?.initPopupWidget({url: 'https://calendly.com/digitoile/30min'})}

          >Prendre rdv <IconArrow /></Button>
          <Link href='/contact'><Button variant="outline">CONTACT<IconArrow className="text-secondary group-hover:text-primary"/></Button></Link>
       </div>
     </div>

     {/* Section vidéo */}
    <div
  className="w-[40%] max-lg:w-full min-h-[300px] relative group"
  style={{ height: contentHeight > 0 ? `${contentHeight}px` : '100%' }}
  onMouseEnter={() => setIsHovered(true)}  // Déclenche l'animation lors du survol de toute la section vidéo
  onMouseLeave={() => setIsHovered(false)} // Réduit l'icône lors du retrait de la souris
>
  {/* Container externe */}
  <div
    className={`absolute inset-0 transition-colors duration-300 ease-in-out rounded-[40px]
      ${isHovered ? 'bg-secondary' : ' anim-black-bg hover:bg-secondary'}`}
    style={{ padding: '20px' }}
  >
    {/* Container vidéo */}
    <div className="relative w-full h-full -mb-[20px] rounded-3xl overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/hero-home.mp4" type="video/mp4" />
      </video>
    </div>
  </div>

  {/* IconArrow Container avec animation */}
  <div
    className="absolute z-20 bottom-8 max-md:bottom-8 max-md:right-8 right-8 w-12 h-12"
  >
    <div
      className={`w-full h-full transition-all duration-500 ease-in-out transform ${isHovered ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-[90deg] opacity-0'}
        rounded-xl flex items-center justify-center
        ${isHovered ? 'bg-secondary' : 'bg-secondary group-hover:bg-secondary'}`}
    >
      <IconArrow
        className={`h-6 w-6 max-md:h-5 max-md:w-5 m-auto
          ${isHovered ? 'text-primary' : 'text-primary group-hover:text-primary'}
          transition-colors duration-300 ease-in-out`}
      />
    </div>
  </div>
</div>


   </div>

   {/* InfiniteScroll en bas */}
          <div className=" mt-14 max-md:mt-10  -mx-10">
            <InfiniteScroll
       words={words}
       className="text-4xlmax-md:text-3xl italic font-bold text-secondary"
     />
</div>
     
 </div>
</Hero>
      <LayoutContent className="">
        
          
      

                <ServicesSection/>
          <CTACall />
         

        
        
        <ThemeViewer />
        
        <ProjectGrid limit={6} />
        
      </LayoutContent>
   
     
    </div>
  );
}