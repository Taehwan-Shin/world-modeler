import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.6)]",
                secondary:
                    "bg-transparent border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white hover:bg-slate-800/50",
                ghost:
                    "hover:bg-slate-800/50 hover:text-white",
                link: "text-cyan-400 underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-8 rounded-full px-4 text-xs",
                lg: "h-12 rounded-full px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
