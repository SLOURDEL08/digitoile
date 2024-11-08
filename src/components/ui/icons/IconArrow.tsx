// src/components/ui/icons/IconArrow.tsx
import { cn } from '@/lib/utils';
import { IconProps } from './types';


const defaultStyles = {
  base: 'text-primary rotate-180 scale-x-[-1] group-hover:scale-x-[1]  transition-all duration-300',
  sizes: {
    sm: 'w-4 h-4',
    lg: 'w-7 h-7'
  },
  variants: {
      primary: 'text-primary hover:text-primary-600',
      outline: 'text-secondary group-hover:text-primary hover:text-secondary-600',
    secondary: 'text-secondary hover:text-secondary-600',
    ghost: 'text-gray-400 hover:text-gray-600'
  },

} as const;

interface ExtendedIconProps extends IconProps {
  size?: keyof typeof defaultStyles.sizes;
  variant?: keyof typeof defaultStyles.variants;
}

export const IconArrow = ({
  width = 24,
  height = 24,
  className,
  size = 'lg',
  variant = 'primary',
}: ExtendedIconProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(
        defaultStyles.base,
        defaultStyles.sizes[size],
        defaultStyles.variants[variant],
        className
      )}
    >
      <path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z" />
    </svg>
  );
};