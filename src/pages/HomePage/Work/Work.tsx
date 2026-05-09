import { Link } from "react-router-dom";

import { AppRoute } from "~constants";
import { useProjects } from "~hooks";

import styles from "./Work.module.scss";
import { WorkCard } from "./WorkCard";

export const Work = () => {
  const { featuredProjects } = useProjects();

  return (
    <section className="section" id="work">
      <div className="section__head reveal">
        <h2 className="section__title">Recent work</h2>
        <span className="mono">{"// 04 / SELECTED PROJECTS"}</span>
      </div>
      <div className={styles.grid}>
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`reveal${index % 2 === 1 ? " reveal--right" : ""}`}
          >
            <WorkCard project={project} />
          </div>
        ))}
      </div>
      <div className={`${styles.cta} reveal`}>
        <span className="mono">{"// MORE PROJECTS"}</span>
        <Link to={AppRoute.Projects} className={styles.ctaLink}>
          See all projects →
        </Link>
      </div>
    </section>
  );
};
