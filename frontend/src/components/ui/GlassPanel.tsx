import { ReactNode } from "react";
import clsx from "clsx";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export default function GlassPanel({
  children,
  className,
}: GlassPanelProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl",
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur-xl",
        "shadow-2xl",
        "p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
