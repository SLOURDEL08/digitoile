// src/components/ui/icons/IconArrow.tsx
import { cn } from '@/lib/utils';
import { IconProps } from './types';

const defaultStyles = {
  base: 'transition-all duration-300 ease-out',
  sizes: {
    xs: 'w-3 h-3',
    sm: 'w-[14px] h-[14px]',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
    xl: 'w-10 h-10',
    '2xl': 'w-12 h-12'
  },
  variants: {
    primary: 'text-primary hover:text-primary-600',
    outline: 'text-secondary group-hover:text-primary hover:text-secondary-600',
    gray: 'text-gray opacity-50 group-hover:text-secondary group-hover:opacity-100',
    light: 'text-white/70 hover:text-white',
    dark: 'text-gray-800 hover:text-black'
  },
  directions: {
    right: 'rotate-0',
    left: 'rotate-180',
    up: '-rotate-90',
    down: 'rotate-90'
  },
  animations: {
    none: '',
    bounce: 'group-hover:animate-bounce',
    pulse: 'group-hover:animate-pulse',
    wiggle: 'group-hover:animate-wiggle',
    spin: 'group-hover:animate-spin',
    slide: 'group-hover:translate-x-1'
  },
  transforms: {
    default: 'scale-x-[1] -rotate-90 group-hover:-scale-y-[1]',
  }
} as const;

interface ExtendedIconProps extends IconProps {
  size?: keyof typeof defaultStyles.sizes;
  variant?: keyof typeof defaultStyles.variants;
  direction?: keyof typeof defaultStyles.directions;
  animation?: keyof typeof defaultStyles.animations;
  transform?: keyof typeof defaultStyles.transforms;
}

export const IconArrow = ({
  width,
  height,
  className,
  size = 'sm',
  variant = 'primary',
  direction = 'right',
  animation = 'none',
  transform = 'default',
}: ExtendedIconProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width || "24"}
      height={height || "24"}
      // Ajusté le viewBox pour correspondre exactement au path
      viewBox="5.98 5.98 12.02 12.02"
      fill="currentColor"
      className={cn(
        defaultStyles.base,
        defaultStyles.sizes[size],
        defaultStyles.variants[variant],
        defaultStyles.directions[direction],
        defaultStyles.animations[animation],
        defaultStyles.transforms[transform],
        className
      )}
    >
      <path 
        d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z" 
      />
    </svg>
  );
};