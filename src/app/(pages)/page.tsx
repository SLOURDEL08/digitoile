'use client'

import LayoutContent from "@/components/layout/content";
import ProjectGrid from "@/components/projects/project-grid";
import CTACall from "@/components/sections/cta-call";
import ServicesSection from "@/components/sections/service-section";
import ThemeViewer from "@/components/sections/theme-viewer/theme-viewer";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero/hero";
import { IconArrow } from "@/components/ui/icons";
import { InfiniteScroll } from "@/components/ui/infinite-scroll/infinite-scroll";
import Typography from "@/components/ui/typography";
import { AtSign } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function Home() {
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
   <div className="flex flex-1 max-md:flex-col max-md:gap-14 max-sm:gap-10 w-full">
     {/* Contenu gauche */}
     <div
       ref={leftContentRef}
       className="w-[60%] max-md:w-full space-y-8 max-md:space-y-6 z-10 max-md:pr-0 pr-8"
     >
       <div
         className="inline-flex font-[500] items-center gap-2 anim-black-bg hover:bg-secondary/10 group tracking-widest transition-all duration-500 bg-secondary/10 rounded-full px-2 py-1.5"
       >
         <span className="bg-secondary text-gray font-[500] max-xs:text-xs max-md:text-sm text-base px-2 p-0.5 rounded-full">
           <AtSign className="w-4"/>
         </span>
         <span className="text-lg px-3 pl-1 max-md:text-base max-xs:text-sm uppercase text-secondary">
           contact@digitoile.fr
         </span>
       </div>
       <Typography variant="title">
         DES SOLUTIONS
         SUR-MESURE POUR VOS PROJETS WEB
       </Typography>
       <div className="flex max-md:gap-6 max-md:pt-2 gap-8 pt-4">
         <Button size="lg">Prendre RDV</Button>
         <Button size="lg" variant="outline">CONTACT</Button>
       </div>
     </div>

     {/* Section vidéo */}
     <div 
       className="w-[40%] max-md:w-full min-h-[300px] relative group"
       style={{ height: contentHeight > 0 ? `${contentHeight}px` : '100%' }}
     >
       {/* Container externe */}
       <div 
         className={`absolute inset-0 transition-colors duration-300 ease-in-out rounded-[40px]
           ${isHovered ? 'bg-secondary' : 'bg-[#BEE237] hover:bg-secondary'}`}
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

       {/* IconArrow Container */}
       <div 
         className="absolute z-20 bottom-[20px] max-md:bottom-[18px] max-md:right-[18px] right-[20px] w-12 h-12"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
       >
         <div className={`w-full h-full transition-colors duration-300 ease-in-out relative
           rounded-[20px] rounded-tr-none rounded-bl-none
           flex items-center justify-center
           ${isHovered ? 'bg-secondary' : 'bg-[#BEE237] group-hover:bg-secondary'}`}
         >
           <IconArrow className={`h-6 w-6 max-md:h-5 max-md:w-5 max-md:right-2 max-md:bottom-2 absolute right-1.5 bottom-1.5
             ${isHovered ? 'text-gray' : 'text-black group-hover:text-gray'}
             transition-colors duration-300 ease-in-out`}
           />
         </div>
       </div>

       {/* Zone étendue hover */}
       <div 
         className="absolute bottom-0 right-0 w-16 h-16 z-40"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
       />
     </div>
   </div>

   {/* InfiniteScroll en bas */}
          <div className=" mt-14  -mx-10">
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