// src/components/ui/button/button.tsx
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Définition des variants du bouton
const buttonVariants = cva(
  // Classe de base commune à tous les variants
  "rounded-full group border-2 flex gap-1 text-xl justify-center items-center uppercase",
  {
    variants: {
      variant: {
        primary: "bg-secondary border-secondary text-primary font-[500]",
        secondary: "bg-secondary text-white hover:bg-secondary-600 focus-visible:ring-secondary-500",
        outline: "bg-transparent border-secondary hover:bg-secondary hover:text-primary font-[500] text-secondary",
        ghost: "!p-0 bg-transparent border-transparent font-semibold",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        lg: "px-5 py-2",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
      fullWidth: false,
    },
  }
)

// Interface des props du bouton
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }