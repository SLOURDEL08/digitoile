'use client'

import Image from "next/image"
import { AnimatePresence } from "framer-motion"
import Typography from "../../ui/typography"
import { themes } from "./data"
import { ScrollControls, ThemeSelector } from "./components"
import { useThemeViewer } from "./useThemeViewer"
import { useRef, useEffect, useState } from "react"

export default function ThemeViewer() {
  const {
    currentTheme,
    isLoading,
    isPlaying,
    showScrollTop,
    containerRef,
    handleScroll,
    scrollToTop,
    togglePlay,
    handleThemeChange,
    handleImageLoad
  } = useThemeViewer(themes[0]);

  const leftColumnRef = useRef<HTMLDivElement>(null);
  const [columnHeight, setColumnHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (leftColumnRef.current) {
        const height = leftColumnRef.current.offsetHeight;
        setColumnHeight(height);
      }
    };

    // Mise à jour initiale
    updateHeight();

    // Observer les changements de taille
    const resizeObserver = new ResizeObserver(updateHeight);
    if (leftColumnRef.current) {
      resizeObserver.observe(leftColumnRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="w-full relative ">
      <div className="flex max-lg:flex-col max-md:gap-14 !z-[50] gap-20">
        {/* Colonne de gauche: Sélection et info */}
        <div ref={leftColumnRef} className="space-y-8 max-lg:w-full w-1/2">
          <div>
            <Typography className="mb-4   text-gray" variant="title">
              Choisissez votre thème
              <span className="text-primary">.</span>
            </Typography>
            <p className="text-gray/50 font-[500] leading-9 text-xl">
              Des designs modernes et adaptés à vos besoins
            </p>
          </div>

          <ThemeSelector
            themes={themes}
            currentTheme={currentTheme}
            onThemeChange={handleThemeChange}
          />
        </div>

        {/* Colonne de droite: Prévisualisation */}
        <div className="relative max-md:h-[400px]  max-lg:w-full w-1/2">
          {/* Background décalé */}
          <div 
            className="absolute max-md:!h-[400px]  top-0 right-0 w-[96%] rounded-t-[100px] gradient-bg" 
            style={{ height: `${columnHeight}px` }}
          />
          
          {/* Conteneur principal */}
          <div 
            className="relative max-md:!h-[400px] mr-4 rounded-t-[90px] overflow-hidden"
            style={{ height: `${columnHeight}px` }}
          >
            <div
              ref={containerRef}
              onScroll={handleScroll}
              className="rounded-t-[90px] scrollbar-hide -mt-4 overflow-y-auto overflow-x-hidden relative transition-all duration-300 bg-[#151516]/90 shadow-black/20 h-full"
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/90">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent h-20 z-10" />
                <Image
                  src={currentTheme.image}
                  alt={currentTheme.label}
                  width={1000}
                  height={2000}
                  className="w-full h-auto"
                  priority
                  onLoad={handleImageLoad}
                />
              </div>
            </div>

            <AnimatePresence>
              <ScrollControls
                isPlaying={isPlaying}
                showScrollTop={showScrollTop}
                onPlayToggle={togglePlay}
                onScrollTop={scrollToTop}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
            <div className="absolute z-[1] -top-20 -left-96 w-[1200px] h-[1200px] rounded-full bg-primary opacity-[0.02] blur-3xl" />

    </div>
  )
}