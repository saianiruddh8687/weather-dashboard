import { ReactNode } from "react";
import GlassPanel from "./GlassPanel";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <GlassPanel className={className}>
      {children}
    </GlassPanel>
  );
}
