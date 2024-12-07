'use client'

import Image from "next/image";
import { Button } from "../ui/button";
import { IconArrow } from "../ui/icons";
import Typography from "../ui/typography";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Position {
  left?: string;
  right?: string;
  top?: string;
  transform?: string;
}

interface ImageDimensions {
  width?: number;
  height?: number;
  className?: string;
}

interface FloatingImageProps {
  src: string;
  delay: number;
  position: Position;
  dimensions?: ImageDimensions;
  index: number;
  customAnimation: {
    duration: number;
    rotationRange: number;
    fallDistance: number;
  };
}

interface ImageConfig {
  src: string;
  position: Position;
  delay: number;
  dimensions?: ImageDimensions;
  customAnimation: {
    duration: number;
    rotationRange: number;
    fallDistance: number;
  };
}

const FloatingImage = ({ 
  src, 
  delay, 
  position, 
  dimensions, 
  index,
  customAnimation 
}: FloatingImageProps) => {
  const defaultDimensions: ImageDimensions = {
    width: 160,
    height: 160,
    className: "w-40 h-40 object-contain"
  };

  const finalDimensions = {
    ...defaultDimensions,
    ...dimensions
  };

  const fallRotation = index % 2 === 0 
    ? customAnimation.rotationRange 
    : -customAnimation.rotationRange;

  return (
    <motion.div
      initial={{ 
        y: 100, 
        opacity: 0,
        rotate: 0 
      }}
      animate={{ 
        y: [100, 0],
        opacity: [0, 1],
        rotate: 0,
      }}
      exit={{ 
        y: [0, customAnimation.fallDistance],
        opacity: [1, 1, 0],
        rotate: [0, fallRotation],
        transition: { 
          duration: customAnimation.duration,
          ease: [0.32, 0, 0.67, 0],
          y: {
            type: "tween",
            ease: [0.22, 0.005, 0.275, 0.94],
            duration: customAnimation.duration * 1.2
          },
          opacity: {
            duration: customAnimation.duration,
            times: [0, 0.8, 1],
            ease: "linear"
          },
          rotate: {
            duration: customAnimation.duration * 0.9,
            ease: [0.34, 1.56, 0.64, 1]
          }
        }
      }}
      transition={{
        y: {
          duration: 1.8,
          delay,
          ease: [0, 0.55, 0.45, 1]
        },
        opacity: {
          duration: 1,
          delay,
        }
      }}
      className="absolute"
      style={position}
    >
      <motion.div
        animate={{ 
          y: [-5, 5, -5],
          rotate: [-2, 2, -2]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 3 + index,
          ease: "easeInOut"
        }}
        className="relative"
      >
        <Image 
          src={src} 
          alt="Élément décoratif" 
          width={finalDimensions.width}
          height={finalDimensions.height}
          className={finalDimensions.className}
        />
      </motion.div>
    </motion.div>
  );
};

export default function CTACall() {
  const [isHovered, setIsHovered] = useState(false);

  const images: ImageConfig[] = [
    {
      src: "/images/ilayers.png",
      position: { 
        left: '5%',
        top: '45%',
        transform: 'translateY(-50%)'
      },
      delay: 0,
      dimensions: {
        width: 200,
        height: 200,
        className: "w-48 h-48 object-contain"
      },
      customAnimation: {
        duration: 3.2,
        rotationRange: 65,
        fallDistance: 450
      }
    },
    {
      src: "/images/pinceau.png",
      position: { 
        right: '5%',
        top: '40%'
      },
      delay: 0.3,
      customAnimation: {
        duration: 2.8,
        rotationRange: 55,
        fallDistance: 400
      }
    },
    {
      src: "/images/ifire.png",
      position: { 
        right: '20%',
        top: '60%'
      },
      delay: 0.6,
      dimensions: {
        width: 120,
        height: 120,
        className: "w-32 h-32 object-contain"
      },
      customAnimation: {
        duration: 2.5,
        rotationRange: 45,
        fallDistance: 380
      }
    }
  ];

  return (
    <div 
      className="bg-gray/20 max-xs:p-6 max-lg:p-14 max-md:p-8 anim-gray-bg transition-all max-md:text-left duration-500 group/container text-center p-20 flex flex-col max-md:gap-4 gap-6 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Typography 
        variant="subtitle" 
        className="font-[800] max-md:mx-0 max-md:w-full !leading-[1.15] mx-auto text-gray max-lg:!text-5xl max-md:!text-4xl max-xs:!text-3xl"
      >
        Besoin de conseils pour booster votre business ?
      </Typography>

      <AnimatePresence>
        {isHovered && (
          <>
            {images.map((image, index) => (
              <FloatingImage 
                key={index}
                src={image.src}
                delay={image.delay}
                position={image.position}
                dimensions={image.dimensions}
                index={index}
                customAnimation={image.customAnimation}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      <Button 
        onClick={() => window.Calendly?.initPopupWidget({url: 'https://calendly.com/digitoile/30min'})}
        variant="outline" 
        className="max-md:group-hover/container:scale-100 max-md:group-hover/container:translate-x-1 w-max max-md:mx-0 max-md:mt-1 max-md:text-base max-md:py-2.5 max-md:px-4 max-md:border mx-auto mt-4 text-gray group-hover/container:scale-110 group-hover/container:bg-gray group-hover/container:text-secondary transition-all duration-300 border-gray"
      >
        Cliquez ici
        <IconArrow className="text-gray transiton-all duration-300 group-hover/container:!text-secondary max-md:w-3 max-md:h-3"/>
      </Button>
    </div>
  );
}