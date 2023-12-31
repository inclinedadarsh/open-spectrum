import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"border border-primary rounded-md text-primary transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-button px-6 py-4",
				destructive:
					"bg-destructive text-destructive-foreground rounded-md shadow-sm hover:bg-destructive/90",
				outline:
					"border border-input bg-transparent shadow-sm hover:bg-muted hover:text-mute-foreground",
				secondary:
					"bg-secondary text-secondary-foreground rounded-md shadow-sm hover:bg-secondary/80",
				ghost: "hover:bg-accent rounded-md hover:text-accent-foreground",
				link: "text-secondary-2 text-base relative after:bg-secondary-2 after:absolute after:h-[1px] after:w-full after:bottom-0 after:left-0 hover:after:w-0 after:transition-all after:duration-300",
			},
			size: {
				default: "",
				sm: "px-5 py-3 text-xs",
				lg: "h-10 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };
