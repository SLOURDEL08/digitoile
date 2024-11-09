// src/components/layout/content.tsx
import { cn } from "@/lib/utils";

interface LayoutContentProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark';
  withContainer?: boolean;
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

export default function LayoutContent({
  children,
  className,
  variant = 'secondary',
  withContainer = true,
  spacing = 'lg'
}: LayoutContentProps) {
  // Variantes de couleur de fond
  const backgroundVariants = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    dark: 'bg-gray'
  };

  // Variantes d'espacement
  const spacingVariants = {
    none: '',
    sm: 'space-y-8',
    md: 'space-y-16',
    lg: 'space-y-20'
  };

  return (
    <section 
      className={cn(
        "w-full",
        backgroundVariants[variant],
        className
      )}
    >
      {withContainer ? (
        <div className="p-14 py-20">
          <div className={cn(
            "flex flex-col",
            spacingVariants[spacing]
          )}>
            {children}
          </div>
        </div>
      ) : (
        children
      )}
    </section>
  );
}