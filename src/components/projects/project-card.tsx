'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { IconArrow } from "../ui/icons";

interface ProjectCardProps {
  title: string;
  image: string;
}

export function ProjectCard({ title, image }: ProjectCardProps) {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Configurer l'Intersection Observer uniquement sur mobile
  useEffect(() => {
    if (!cardRef.current || !isMobile) {
      setIsActive(false);  // Reset isActive si on n'est pas sur mobile
      return;
    }

    const options = {
      root: null,
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      });
    }, options);

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [isMobile]);

  // Classes dynamiques basées sur l'état actif (mobile) ou hover (desktop)
  const imageClasses = `w-full h-full object-cover transition-all duration-300 ease-in-out 
    ${isMobile && isActive ? 'grayscale-0 rounded-br-[45px]' : 'grayscale'}
    ${!isMobile ? 'group-hover:grayscale-0 group-hover:rounded-br-[45px]' : ''}`;

  const overlayClasses = `w-full flex p-6 items-end h-full inset-0 
    transition-all duration-500 ease-in-out
    bg-gradient-to-t from-secondary/90 to-transparent 
    z-20 absolute
    ${isMobile && isActive ? 'opacity-100' : 'opacity-0'}
    ${!isMobile ? 'group-hover:opacity-100' : ''}`;

  return (
    <div ref={cardRef} className="relative group w-full h-full overflow-hidden">
      <Image 
        src={image} 
        width={500} 
        height={500} 
        alt={title}
        className={imageClasses}
      />
      
      <div className={overlayClasses}>
        <span className="text-4xl text-gray leading-9 font-[600]">{title}</span>
        
        <a href="#" className="bg-primary group/a  p-4 absolute right-0 top-0">
          <IconArrow className="text-secondary w-10 h-10 !translate-x-[1]  group-hover/a:!-translate-x-[0]"/>
        </a>
      </div>
    </div>
  );
}