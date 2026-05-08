export interface ProcessStepProps {
  step: number;
  totalSteps: number;
  code: string;
  title: string;
  description: string;
  revealDir?: "left" | "right";
  delay?: number;
  onMouseEnterHandler: (step: number, total: number) => void;
  onMouseLeaveHandler: () => void;
}
