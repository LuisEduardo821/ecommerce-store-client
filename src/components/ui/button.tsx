import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        type={type}
        className={cn(
          `
      w-auto
      rounded-full
      border-transparent
      bg-black
      px-5
      py-3
      disabled:cursor-not-allowed
      disabled:opacity-50
      text-white
      font-semibold
      hover:opacity-75
      transition
      `,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
