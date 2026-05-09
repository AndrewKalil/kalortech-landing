import { Carousel } from "./Carousel";
import { ProjectCard } from "./ProjectCard";
import styles from "./ProjectCategory.module.scss";
import type { ProjectCategoryProps } from "./ProjectCategory.types";

export const ProjectCategory = ({ title, projects }: ProjectCategoryProps) => (
  <section className="section section--tight">
    <div className={`${styles.header} reveal`}>
      <h2 className={styles.title}>{title}</h2>
      <span className="mono">
        {projects.length} {projects.length === 1 ? "project" : "projects"}
      </span>
    </div>
    {projects.length === 1 ? (
      <div className={styles.single}>
        <ProjectCard project={projects[0]!} />
      </div>
    ) : (
      <Carousel items={projects} />
    )}
  </section>
);
