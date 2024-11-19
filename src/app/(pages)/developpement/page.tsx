'use client'

import LayoutContent from "@/components/layout/content";
import ProjectGrid from "@/components/projects/project-grid";
import ThemeViewer from "@/components/sections/theme-viewer/theme-viewer";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/ui/hero/hero";
import WebCollapse from "@/components/developpement/web-collapse";
import { IconArrow } from "@/components/ui/icons";
import Typography from "@/components/ui/typography";
import { InfiniteScroll } from "@/components/ui/infinite-scroll/infinite-scroll";
import Image from "next/image";

export default function Developpement() {
  const words = [
    "DÉVELOPPEMENT WEB",
    "DESIGN UI/UX",
    "MARKETING DIGITAL",
    "REFERENCEMENT",
    "E-COMMERCE",
  ];

  return (
    <div className="relative">
      <Hero className="text-center">
        <div className="relative w-full pb-10 max-md:pb-0 overflow-visible overflow-hidden bg-primary">
          {/* Image Feu */}
          <div className="absolute right-0 bottom-0 z-10">
            <div className="rounded-lg w-auto overflow-hidden">
              <Image 
                src="/images/ifire.png" 
                alt="Floating fire image" 
                width={100}
                height={100}
                className="w-[80px] h-[80px] 
                  lg:w-[100px] lg:h-[100px] 
                  xl:w-[120px] xl:h-[120px] 
                  2xl:w-[140px] 2xl:h-[140px]
                  object-contain"
                draggable="false"
              />
            </div>
          </div>

          {/* Image Pinceau */}
          <div className="max-md:hidden absolute -left-0 -bottom-0 z-10">
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="/images/ilayers.png" 
                alt="Floating layers image" 
                width={100}
                height={100}
                className="w-[140px] h-[140px] 
                  lg:w-[180px] lg:h-[180px] 
                  xl:w-[220px] xl:h-[220px] 
                  2xl:w-[260px] 2xl:h-[260px]
                  object-contain"
                draggable="false"
              />
            </div>
          </div>

          <div className="w-full mx-auto">
            <div className="">
              {/* Left Content */}
              <div className="space-y-8 max-md:space-y-6 max-md:text-left">
                <div className="inline-flex items-center font-[500] gap-2 anim-black-bg hover:bg-secondary/10 group transition-all duration-500 bg-secondary/10 rounded-full pl-2 pr-4 py-1.5">
                  <span className="bg-secondary text-white font-[500] max-xs:text-xs max-md:text-sm text-base px-2.5 py-0.5 rounded-full">New</span>
                  <span className="text-lg max-md:text-base max-xs:text-sm text-secondary">Plugins & thèmes personnalisables</span>
                </div>

                <Typography className="max-w-6xl mx-auto" variant="title">
                  Faites développer votre site web sur-mesure
                </Typography>

                <p className="text-2xl font-[500] max-xs:text-lg max-md:mx-0 max-md:w-full max-md:text-xl w-2/3 mx-auto text-black/70 leading-relaxed">
                  Des solutions web professionnelles adaptées à vos besoins. 
                  De la vitrine à le-commerce, nous donnons vie à vos projets digitaux.
                </p>

                <div className="flex justify-center flex-wrap max-md:justify-start max-md:gap-4 gap-8">
                  <Button className="">
                    Nos services
                    <IconArrow/>
                  </Button>
                  <Button variant="outline" className="">
                    Nos projets
                    <IconArrow variant="outline"/>
                  </Button>
                </div>
              </div>

              {/* Right Content - Services Grid */}
              <div className="relative">
                {/* Gradient Elements */}
                <div className="absolute -top-10 right-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
                <div className="absolute -top-40 -left-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>

            <div className=" mt-14  -mx-10">
            <InfiniteScroll
       words={words}
       className="text-4xlmax-md:text-3xl italic font-bold text-secondary"
     />
</div>
      </Hero>
          
      <LayoutContent className="">
        <WebCollapse/>
        <ThemeViewer />
        <ProjectGrid limit={6} />
      </LayoutContent>
    </div>
  );
}