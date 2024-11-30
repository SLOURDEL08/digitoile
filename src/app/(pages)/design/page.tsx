'use client';

import LayoutContent from "@/components/layout/content";
import { Hero } from "@/components/ui/hero/hero";
import React from "react";
import SliderProject from "@/components/design/slider-project";
import StepsProcess from "@/components/design/steps-process";
import UseTechno from "@/components/design/use-techno";


export default function Design() {

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