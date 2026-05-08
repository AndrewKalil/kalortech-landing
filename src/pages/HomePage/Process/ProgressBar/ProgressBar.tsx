import cn from "classnames";

import styles from "./ProgressBar.module.scss";
import type { ProgressBarProps } from "./ProgressBar.types";

export const ProgressBar = ({ fill, label, isVisible }: ProgressBarProps) => (
  <div className={styles.bar}>
    <span
      className={cn(styles.label, isVisible && styles.visible)}
      style={{ left: `${fill}%` }}
    >
      {label}
    </span>
    <div className={styles.fill} style={{ width: `${fill}%` }} />
  </div>
);
