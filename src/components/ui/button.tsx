import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition-[background-color,color,transform] focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 motion-safe:hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-strong",
        dark: "bg-foreground text-background hover:bg-foreground-soft",
        outline: "border border-border bg-background text-foreground hover:bg-accent",
        ghost: "text-foreground hover:bg-accent",
      },
      size: {
        default: "h-11",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return <Component className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}