import cn from "classnames";

import styles from "./ServiceCard.module.scss";
import type { ServiceCardProps } from "./ServiceCard.types";

export const ServiceCard = ({ num, title, description, icon, revealDir, delay = 0 }: ServiceCardProps) => (
  <div
    className={cn("reveal", revealDir === "right" && "reveal--right", styles.service)}
    style={{ ["--d" as string]: `${delay}ms` }}
  >
    <div className={styles.icon} aria-hidden="true">
      {icon}
    </div>
    <div>
      <div className={styles.num}>{num}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  </div>
);
