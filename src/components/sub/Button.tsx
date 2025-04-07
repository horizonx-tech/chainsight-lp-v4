import React from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "tertiary";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}) => {
  const variantStyles: Record<Variant, string> = {
    primary: "bg-[#18181B] rounded-full text-[#FFE000] transition-transform duration-200 transition-transform duration-200 active:scale-90 hover:scale-105 transition-transform duration-200 px-4 py-2",
    secondary: "bg-[#09090B] border border-[#27272A] rounded-md hover:bg-[#27272A] transition-transform duration-200 active:scale-90",
    tertiary: "bg-[#27272A] border border-[#27272A] rounded-md hover:bg-[#3f3f46] transition-transform duration-200 active:scale-90",
  };

  const sizeStyles: Record<Size, string> = {
    sm: "px-5 py-2 text-xs",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(
        " transition duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;