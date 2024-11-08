// src/components/ui/infinite-scroll/infinite-scroll.tsx
'use client';

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface InfiniteScrollProps {
  words: string[];
  className?: string;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  gap?: number;
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
  pauseOnHover = true,
  separatorSize = {
    width: 35,
    height: 35
  }
}: InfiniteScrollProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [duplicateWords, setDuplicateWords] = useState<string[]>([]);

  const speedMap = {
    slow: 200,
    normal: 30,
    fast: 20,
  };

  const calculateDuplicates = useCallback(() => {
    if (!scrollRef.current) return;
    
    const containerWidth = scrollRef.current.offsetWidth;
    const contentWidth = containerWidth / words.length;
    const duplicatesNeeded = Math.ceil(window.innerWidth / contentWidth) + 1;
    
    setDuplicateWords(Array(duplicatesNeeded).fill(words).flat());
  }, [words]);

  useEffect(() => {
    calculateDuplicates();
    window.addEventListener('resize', calculateDuplicates);
    return () => window.removeEventListener('resize', calculateDuplicates);
  }, [calculateDuplicates]);

  const Separator = () => (
    <Image 
      src="/images/star.webp"
      alt="separator"
      width={separatorSize.width}
      height={separatorSize.height}
      className="object-contain"
    />
  );

  return (
    <div 
      className={cn(
        "overflow-hidden whitespace-nowrap w-full",
        className
      )}
      ref={scrollRef}
    >
      <div 
        className={cn(
          "inline-flex items-center whitespace-nowrap gap-[--gap]",
          pauseOnHover && "hover:[animation-play-state:paused]",
          direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'
        )}
        style={{ 
          '--gap': `${gap}px`,
          '--speed': `${speedMap[speed]}s`,
        } as React.CSSProperties}
      >
        {duplicateWords.map((word, idx) => (
          <React.Fragment key={idx}>
            <span className="whitespace-nowrap">{word}</span>
            <Separator />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};