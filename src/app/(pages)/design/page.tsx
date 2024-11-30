'use client';

import { motion } from "framer-motion";
import LayoutContent from "@/components/layout/content";
import { Hero } from "@/components/ui/hero/hero";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
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
    <div className="relative isolate  overflow-visible">
      <Hero className="relative ">
          <SliderProject  />
            

      </Hero>

      {/* Content Sections */}
      <LayoutContent>
      
          


            <StepsProcess />


            <UseTechno />
      </LayoutContent>
    </div>
  );
}