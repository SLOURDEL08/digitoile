'use client'

import { cn } from '@/lib/utils';
import { HeroProps } from './hero.types';

export function Hero({
  children,
  className,
}: HeroProps) {
  return (
    <section 
      className={cn(
        'w-full relative overflow-hidden bg-primary',
        className
      )}
    >
      
      <div className="p-10 max-w-[2000px] mx-auto  max-xs:p-6 relative">
        {children}
      </div>
    </section>
  );
}