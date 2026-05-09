import { Lock } from "lucide-react";

import styles from "./Disclaimer.module.scss";
import type { DisclaimerProps } from "./Disclaimer.types";

export const Disclaimer = (props: DisclaimerProps) => {
  const { children } = props;
  return (
    <div className={styles.root}>
      <Lock size={16} className={styles.icon} />
      <p className={styles.text}>{children}</p>
    </div>
  );
};
