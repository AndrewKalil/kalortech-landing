import { useCallback } from "react";
import cn from "classnames";

import styles from "./ProcessStep.module.scss";
import type { ProcessStepProps } from "./ProcessStep.types";

export const ProcessStep = (props: ProcessStepProps) => {
  const {
    step,
    totalSteps,
    code,
    title,
    description,
    revealDir,
    delay = 0,
    onMouseEnterHandler,
    onMouseLeaveHandler,
  } = props;

  const onEnterHandler = useCallback(
    () => onMouseEnterHandler(step, totalSteps),
    [onMouseEnterHandler, step, totalSteps],
  );

  return (
    <div
      className={cn("reveal", revealDir === "right" && "reveal--right", styles.step)}
      style={{ ["--d" as string]: `${delay}ms` }}
      onMouseEnter={onEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className={styles.num}>{code}</div>
      <div className={styles.title}>{title}</div>
      <p className={styles.desc}>{description}</p>
    </div>
  );
};
