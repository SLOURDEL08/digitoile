'use client';

import { motion } from "framer-motion";
import LayoutContent from "@/components/layout/content";
import { Hero } from "@/components/ui/hero/hero";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import SliderProject from "@/components/design/slider-project";
import StepsProcess from "@/components/design/steps-process";
import UseTechno from "@/components/design/use-techno";
import { InfiniteScroll } from "@/components/ui/infinite-scroll/infinite-scroll";
import { IconArrow } from "@/components/ui/icons";

const accordionItems = [
  {
    id: 1,
    title: "Design System",
    subtitle: "8 projets · 14 composants",
    image: "/images/projects/card/lesvanniers.webp",
  },
  {
    id: 2,
    title: "Motion Design",
    subtitle: "12 projets · 8 animations",
    image: "/images/projects/card/patrimoine.webp",
  },
  {
    id: 3,
    title: "Web Development",
    subtitle: "15 projets · Full Stack",
    image: "/images/projects/card/toastcollectif.webp",
  },
  {
    id: 4,
    title: "UI/UX Design",
    subtitle: "20 projets · Mobile & Web",
    image: "/images/projects/card/rocketschool.webp",
  },
];

const words = [
  "CRÉATIVITÉ",
  "INNOVATION",
  "DESIGN",
  "EXPERTISE",
  "PASSION",
];

export default function Design() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className="relative isolate overflow-visible">
      <Hero className="relative overflow-visible">
        <section className="relative w-full">
          <div className="">
            <div className="flex flex-col lg:flex-row gap-10 h-full">
              {/* Left Content */}
              <div className="flex-1 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  <Typography variant="title" className="-mb-4">
                    Des créations
                    <br /> 
                    sur-mesure
                  </Typography>
                  <p className="text-secondary/60 text-xl  font-[600]">
                    Transformons vos idées en expériences digitales uniques et mémorables, Transformons vos idées en expériences digitales uniques et mémorables ransformons vos idées en expériences digitales uniques et mémorables.
                  </p>
                  <Button 
                    
                  >
                    Démarrer un projet
                    <IconArrow/>
                  </Button>
                </motion.div>
              </div>

              {/* Right Accordion */}
              <div className="flex-1">
                <motion.div 
                  className="flex gap-5 h-[400px]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {accordionItems.map((item) => (
                    <motion.div
                      key={item.id}
                      className={`relative overflow-hidden cursor-pointer transition-all duration-500
                                ${activeId === item.id ? 'flex-[0.8]  rounded-3xl ' : 'flex-[0.2] grayscale  rounded-2xl '}
                                hover:flex-[0.8] group`}
                      onClick={() => setActiveId(item.id)}
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-secondary" />
                      
                      <div className={`absolute bottom-6 left-6 text-white transition-all duration-300
                                    ${activeId === item.id || 'group-hover:opacity-100' ? 'opacity-100' : 'opacity-0'}`}>
                        <div className={`
                        ${activeId === item.id  ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
                           <h3 className="text-2xl text-gray uppercase font-semibold mb-2">
                          {item.title}
                        </h3>
                        <span className="text-sm font-[600] anim-gray-bg px-3 py-1.5 rounded-full text-gray/80">
                          {item.subtitle}
                        </span>
                        </div>
                   
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

           <div className=" mt-14  -mx-10">
            <InfiniteScroll
       words={words}
       className="text-4xlmax-md:text-3xl italic font-bold text-secondary"
     />
</div>
          </div>
        </section>
      </Hero>

      {/* Content Sections */}
      <LayoutContent>

            <SliderProject />


            <StepsProcess />


            <UseTechno />
      </LayoutContent>
    </div>
  );
}