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
        'w-full min-h-[60vh] relative bg-primary',
        className
      )}
    >
      <div className="p-10">
        {children}
      </div>
    </section>
  );
}