import styles from "./ProjectsSkeleton.module.scss";

export const SkeletonCard = () => (
  <div className={styles.card}>
    <div className={styles.preview} />
    <div className={styles.body}>
      <div className={styles.metaRow}>
        <div className={styles.category} />
        <div className={styles.linkBtn} />
      </div>
      <div className={styles.title} />
      <div className={styles.desc1} />
      <div className={styles.desc2} />
      <div className={styles.tags}>
        <div className={styles.tag} />
        <div className={styles.tag} />
        <div className={styles.tag} />
      </div>
    </div>
  </div>
);
