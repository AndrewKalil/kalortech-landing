import styles from "./ProjectsSkeleton.module.scss";
import { SkeletonCard } from "./SkeletonCard";

export const SkeletonSection = () => (
  <div className={styles.section}>
    <div className={styles.header}>
      <div className={styles.headerTitle} />
      <div className={styles.headerCount} />
    </div>
    <div className={styles.grid}>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  </div>
);
