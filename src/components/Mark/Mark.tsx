import cn from "classnames";

import styles from "./Mark.module.scss";
import type { MarkProps } from "./Mark.types";

export const Mark = ({ size = "sm", className }: MarkProps) => (
  <span className={cn(styles.mark, styles[size], className)}>
    <span className={cn(styles.br, styles.left)}>&lt;</span>
    kalortech
    <span className={cn(styles.br, styles.right)}>/&gt;</span>
  </span>
);
