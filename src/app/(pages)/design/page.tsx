'use client';

import { motion } from "framer-motion";
import LayoutContent from "@/components/layout/content";
import { Hero } from "@/components/ui/hero/hero";
import { 
  Palette, PenTool, Layout, Globe 
} from "lucide-react";
import React from "react";
import SliderProject from "@/components/design/slider-project";
import StepsProcess from "@/components/design/steps-process";
import UseTechno from "@/components/design/use-techno";
import { InfiniteScroll } from "@/components/ui/infinite-scroll/infinite-scroll";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";

const services = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Maquette Web",
    description: "Design d'interfaces modernes et intuitives"
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Graphisme",
    description: "Logos et chartes graphiques uniques"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Design UI/UX",
    description: "Expériences utilisateur optimisées"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Web Design",
    description: "Sites web créatifs et responsifs"
  }
];

const words = [
  "DÉVELOPPEMENT WEB",
  "DESIGN UI/UX",
  "MARKETING DIGITAL",
  "REFERENCEMENT",
  "E-COMMERCE",
];

export default function Design() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 0,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * index,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative isolate">
      <Hero className="relative">
        {/* Grille simplifiée */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 transform-gpu bg-[linear-gradient(to_right,#1515162e_1px,transparent_90px),linear-gradient(to_bottom,#1515162e_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 transform-gpu bg-gradient-to-b from-[#CEF440]/80 via-transparent to-[#CEF440]/80" />
        </div>

        <div className="flex max-lg:flex-col justify-between max-md:gap-10 gap-20 relative z-10">
          {/* En-tête */}
          <div className="max-lg:w-full text-left w-[55%] space-y-8 max-md:space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="title" className="">
                Définissions votre identité graphique ensemble
              </Typography>
            </motion.div>

            <div className="flex gap-8 max-md:flex-wrap max-md:gap-6 pt-4">
              <Button size="lg">Prendre RDV</Button>
              <Button size="lg" variant="outline">CONTACT</Button>
            </div>
          </div>

          {/* Grille des services avec animation séquentielle */}
          <div className="grid max-lg:max-w-full max-w-md grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                animate="animate"
                custom={index}
                className="relative group p-6 max-md:p-4 rounded-2xl border border-[#151516]/10 bg-secondary/70 hover:bg-secondary/10 transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="mb-4 p-3 rounded-xl bg-white/10 w-fit group-hover:bg-white/20 transition-all">
                    {React.cloneElement(service.icon, { 
                      className: "text-white/90 transition-all group-hover:scale-105" 
                    })}
                  </div>

                  <h3 className="text-lg leading-6 font-semibold text-white/90 mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-white/80 text-sm font-[500] group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative -mx-10 z-10">
          <InfiniteScroll
            words={words}
            className="text-4xl max-md:text-3xl mt-14 italic font-bold text-secondary"
          />
        </div>
      </Hero>

      <LayoutContent>
        <SliderProject/>
        <StepsProcess/>
        <UseTechno/>
      </LayoutContent>
    </div>
  );
}