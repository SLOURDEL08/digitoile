'use client'

import Image from "next/image";
import { Button } from "../ui/button";
import { IconArrow } from "../ui/icons";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Theme {
  id: number;
  label: string;
  image: string;
}

const themes: Theme[] = [
  { id: 1, label: "Site vitrine", image: "/images/projects/paulsavine.png" },
  { id: 2, label: "E-commerce", image: "/images/projects/lesvanniers.png" },
  { id: 3, label: "Portfolio", image: "/images/projects/paulsavine.png" },
];

// Vitesse de scroll en pixels par seconde
const SCROLL_SPEED = 100; // 100px par seconde

export default function ThemeViewer() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<number>();

  const startAutoScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const startTime = performance.now();
      const startPosition = 0;
      const endPosition = container.scrollHeight - container.clientHeight;

      // Reset position
      container.scrollTop = 0;

      // Animation de scroll fluide
      const animateScroll = (currentTime: number) => {
        const elapsed = (currentTime - startTime) / 1000; // Convertir en secondes
        const distance = SCROLL_SPEED * elapsed; // Distance à parcourir basée sur la vitesse
        const progress = Math.min(distance / endPosition, 1);

        // Fonction d'easing pour un démarrage et une fin en douceur
        const easeInOutQuad = (t: number) => 
          t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        const currentPosition = startPosition + (endPosition * easeInOutQuad(progress));
        container.scrollTop = currentPosition;

        if (progress < 1) {
          scrollAnimationRef.current = requestAnimationFrame(animateScroll);
        }
      };

      // Démarre le scroll après un délai
      setTimeout(() => {
        scrollAnimationRef.current = requestAnimationFrame(animateScroll);
      }, 500);
    }
  };

  const handleThemeChange = (theme: Theme) => {
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
    }

    setIsLoading(true);
    setImageLoaded(false);
    setCurrentTheme(theme);

    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    return () => {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setIsLoading(false);
    startAutoScroll();
  };

  // Le reste du JSX reste inchangé
  return (
    <div className="bg-primary p-12">
      <div className="flex gap-14">
        {/* Colonne gauche */}
        <div className="w-[60%] space-y-10">
          <span className="text-6xl font-semibold uppercase items-center gap-3">
            Un thème sur-mesure adapté pour votre business
          </span>

          <div className="flex items-center justify-start gap-4">
            {themes.map((theme) => (
              <label
                key={theme.id}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={currentTheme.id === theme.id}
                  onChange={() => handleThemeChange(theme)}
                  className="w-5 h-5 rounded-full border-gray/30"
                />
                <span className="text-lg font-medium text-secondary group-hover:text-gray">
                  {theme.label}
                </span>
              </label>
            ))}
          </div>

          <Button>
            Nos projets
            <IconArrow />
          </Button>
        </div>

        {/* Colonne droite */}
        <div className="w-[40%] h-[400px] border-[20px] border-black/20 rounded-[50px] overflow-hidden">
          <div 
            ref={containerRef}
            className="relative w-full h-full overflow-y-auto overflow-x-hidden"
          >
            <div className={cn(
              "transition-opacity duration-500",
              !imageLoaded && "opacity-0"
            )}>
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

            {(!imageLoaded || isLoading) && (
              <div className="absolute inset-0 flex items-center justify-center bg-black">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-3 h-3 bg-white rounded-full animate-bounce" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}