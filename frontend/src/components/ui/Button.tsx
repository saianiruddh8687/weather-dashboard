import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-5 py-3 font-medium transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-sky-400",
        {
          "bg-sky-500 hover:bg-sky-600 text-white":
            variant === "primary",

          "bg-white/10 hover:bg-white/20 border border-white/10":
            variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
