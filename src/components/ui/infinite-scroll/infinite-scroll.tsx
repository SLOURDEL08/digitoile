'use client';

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Variant = 'default' | 'primary';

interface InfiniteScrollProps {
  words: string[];
  className?: string;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  gap?: number;
  variant?: Variant;
  pauseOnHover?: boolean;
  separatorSize?: {
    width?: number;
    height?: number;
  };
}

export const InfiniteScroll = ({
  words,
  className,
  direction = 'left',
  speed = 'slow',
  gap = 20,
  variant = 'default',
  pauseOnHover = false,
  separatorSize = {
    width: 35,
    height: 35
  }
}: InfiniteScrollProps) => {
  const speedMap = {
    slow: 200,
    normal: 30,
    fast: 20,
  };

  const separatorStyle = {
    width: separatorSize.width || 35,
    height: separatorSize.height || 35,
  };

  // Définir l'image de l'étoile en fonction du variant
  const starImage = variant === 'primary' ? '/images/star-primary.webp' : '/images/star.webp';

  // Référence pour obtenir la largeur du conteneur
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  // Calculer la largeur du conteneur lors du premier rendu et à chaque redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (scrollRef.current) {
        setSliderWidth(scrollRef.current.offsetWidth);
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Définition de la direction de l'animation
  const animationDirection = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

  // Calculer le nombre de "dupes" nécessaires pour que le défilement soit continu
  const duplicateWords = [...words, ...words]; // Dupliquer les mots pour garantir un défilement continu

  return (
    <div 
      ref={scrollRef}
      className={cn(
        "overflow-hidden whitespace-nowrap text-4xl w-full relative",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center whitespace-nowrap gap-[--gap]",
          pauseOnHover && "hover:[animation-play-state:paused]",
          animationDirection
        )}
        style={{ 
          '--gap': `${gap}px`,
          '--speed': `${speedMap[speed]}s`,
          transform: `translateX(-${sliderWidth / 2}px)`, // Centrer le contenu au démarrage
        } as React.CSSProperties}
      >
        {duplicateWords.map((word, idx) => (
          <React.Fragment key={idx}>
            <span className="whitespace-nowrap font-[800]">{word}</span>
            <div className="flex-shrink-0">
              <Image 
                src={starImage}
                alt="separator"
                width={separatorStyle.width}
                height={separatorStyle.height}
                className="object-contain max-md:w-8"
                layout="intrinsic"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};