interface StepData {
  step: number;
  code: string;
  title: string;
  description: string;
  revealDir: "left" | "right";
  delay: number;
}

export const PROCESS_STEPS: StepData[] = [
  {
    step: 1,
    code: "01 / DISCOVER",
    title: "Talk first",
    description: "A real conversation. What you need, what you have, and what is actually worth building.",
    revealDir: "left",
    delay: 0,
  },
  {
    step: 2,
    code: "02 / SCOPE",
    title: "Define the cut",
    description: "A clear scope, a fixed price, a timeline. No vague retainers, no scope creep dressed as features.",
    revealDir: "left",
    delay: 120,
  },
  {
    step: 3,
    code: "03 / BUILD",
    title: "Ship in small pieces",
    description: "Short cycles, working previews, your feedback baked in. You see progress, not promises.",
    revealDir: "right",
    delay: 0,
  },
  {
    step: 4,
    code: "04 / HANDOFF",
    title: "Leave it clean",
    description: "Documented, deployed, owned by you. Optional support after, never required.",
    revealDir: "right",
    delay: 120,
  },
];
