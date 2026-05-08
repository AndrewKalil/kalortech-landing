import type { ReactNode } from "react";

export interface ServiceCardProps {
  num: string;
  title: string;
  description: string;
  icon: ReactNode;
  revealDir?: "left" | "right";
  delay?: number;
}
