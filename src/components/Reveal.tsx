import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span";
}

export default function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const { ref, inView } = useInView();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: inView ? undefined : 0,
        animation: inView ? `fade-up 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms forwards` : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
