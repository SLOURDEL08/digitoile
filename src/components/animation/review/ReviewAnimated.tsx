import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { type Review } from "@/components/animation/review/types";

type ReviewAnimatedProps = {
  reviews: Review[]  // On attend maintenant un tableau de reviews
}

const ReviewAnimated = ({ reviews }: ReviewAnimatedProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // Change l'index après un délai pour laisser l'animation de sortie se terminer
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        setIsAnimating(false);
      }, 500);
    }, 5000); // Change de témoignage toutes les 5 secondes

    return () => {
      clearInterval(interval);
    };
  }, [reviews.length]);

  const currentReview = reviews[currentIndex];

  return (
    <div className="relative h-[75px] max-md:h-[70px] w-max max-md:w-full overflow-visible">
      <div 
        className={`
          transition-all duration-500 ease-in-out
          ${isAnimating ? 'translate-x-[-100%] opacity-0' : 'translate-x-0 opacity-100'}
        `}
      >
        <div className="h-[75px]  max-md:h-[70px] relative max-md:w-full w-max gap-4 max-md:gap-3 flex items-end">
          {/* Avatar section */}
          <div className='anim-white-bg border-2 border-white/10 backdrop-blur-sm p-3 max-md:p-2 rounded-full max-md:w-[90px] max-md:h-[70px] h-[75px] w-[75px] shadow-sm'>
            <div className="relative w-full h-full overflow-hidden rounded-full">
              <Image 
                src={currentReview.avatar}
                alt={`Avatar de ${currentReview.name}`} 
                fill
                className='object-cover'
              />
            </div>
            <div className='absolute max-md:-bottom-2 max-md:left-1 -bottom-1 left-2'>
              <p className="text-[10px] w-max font-bold bg-secondary -rotate-6 px-3 text-white p-1 rounded-full italic">
                {currentReview.name}
              </p>
            </div>
          </div>

          {/* Review content section */}
          <div className='w-[360px] max-md:w-full  anim-white-bg border-2 border-white/10 backdrop-blur-sm h-full rounded-full max-md:p-2 max-md:px-5 p-4 px-6 relative'>
            <div className='flex  max-md:flex-col justify-between items-center h-full'>
              <div className='flex-1 pr-4'>
                <p className='text-[14px] max-md:text-xs text-truncate max-md:leading-[15px] max-md:pt-0.5 leading-[17px] text-secondary font-semibold line-clamp-2'>
                  {currentReview.reviewDescription}
                </p>
              </div>

              <div className='flex max-md:flex-row max-md:justify-end w-full flex-col items-end gap-1.5'>
                <div className='flex max-md:absolute max-md:top-2.5 max-md:right-6 gap-0.5'>
                  {[...Array(5)].map((_, index) => (
                    <Star 
                      key={index}
                      className={`
                        h-3.5 w-3.5 max-md:w-2.5 max-md:h-2.5  fill-yellow-400 text-yellow-400
                        transition-all duration-300 delay-${index * 100}
                        ${isAnimating ? 'scale-0' : 'scale-100'}
                      `}
                    />
                  ))}
                </div>
                <p className='text-[10px] max-md:hidden italic font-bold leading-4 text-secondary/70'>
                  {currentReview.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReviewAnimated;