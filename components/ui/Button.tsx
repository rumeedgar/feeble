import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-300 text-button";

  const variants = {
    primary: "bg-brand text-white hover:opacity-90",
    outline:
      "bg-transparent text-text-main border border-border-gray hover:border-brand hover:text-brand",
  };

  const dimensions = {
    primary: "w-[138px] h-[41px] rounded-[43.62px]",
    outline: "w-[266px] h-[46px] rounded-[50px]",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        dimensions[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
