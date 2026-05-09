import styles from "./WorkCard.module.scss";
import type { WorkCardProps } from "./WorkCard.types";

export const WorkCard = ({ project }: WorkCardProps) => (
  <div className={styles.card}>
    <div className={styles.preview}>
      {project.image ? (
        <img src={project.image} alt={project.title} className={styles.img} loading="lazy" />
      ) : (
        <div className={styles.placeholder} />
      )}
    </div>
    <div className={styles.body}>
      <span className={`mono ${styles.category}`}>{project.category}</span>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
    </div>
  </div>
);
