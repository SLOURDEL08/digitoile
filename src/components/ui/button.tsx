// src/components/ui/button/button.tsx
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Définition des variants du bouton
const buttonVariants = cva(
  // Classe de base commune à tous les variants
  "rounded-full group font-[600]  border-2 !leading-[1] flex gap-2.5 text-xl max-md:text-base font-cd justify-center items-center uppercase",
  {
    variants: {
      variant: {
        primary: "bg-secondary border-secondary text-primary ",
        secondary: "bg-secondary text-white hover:bg-secondary-600 focus-visible:ring-secondary-500",
        outline: "bg-transparent border-secondary hover:bg-secondary hover:text-primary text-secondary",
        ghost: "!p-0 bg-transparent border-transparent font-semibold",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: " px-5 py-2",
        lg: "px-4 py-[9px] pt-2.5",
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