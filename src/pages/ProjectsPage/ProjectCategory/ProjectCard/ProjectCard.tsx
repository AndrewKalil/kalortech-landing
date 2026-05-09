import styles from "./ProjectCard.module.scss";
import type { ProjectCardProps } from "./ProjectCard.types";

export const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className={styles.card}>
    <div className={styles.preview}>
      {project.image ? (
        <img src={project.image} alt={project.title} className={styles.img} loading="lazy" />
      ) : (
        <div className={styles.placeholder} />
      )}
    </div>
    <div className={styles.body}>
      <div className={styles.meta}>
        <span className={`mono ${styles.category}`}>{project.category}</span>
        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label={`Visit ${project.title}`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.stack}>
        {project.tags.map((tech) => (
          <span key={tech} className={styles.tag}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);
