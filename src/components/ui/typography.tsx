import { createElement, FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type VariantType = 'title' | 'subtitle' | 'description';

interface TypographyProps {
  children: ReactNode;
  variant: VariantType;
  as?: ElementType;
  className?: string;
}

const variantStyles: Record<VariantType, string> = {
  title: 'smart-title  text-secondary !leading-[1] uppercase  max-xs:text-4xl max-sm:text-5xl',
  subtitle: 'text-6xl font-bold text-secondary !leading-[1] uppercase max-xs:text-3xl max-sm:text-5xl',
  description: 'text-base text-gray-600 leading-relaxed'
};

const Typography: FC<TypographyProps> = ({
  children,
  variant,
  as = 'p',
  className
}) => {
  return createElement(
    as,
    {
      className: cn(variantStyles[variant], className)
    },
    children
  );
};

export default Typography;