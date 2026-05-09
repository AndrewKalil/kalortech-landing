import { Link } from "react-router-dom";

import { AppRoute } from "~constants";
import { useProjects } from "~hooks";

import styles from "./Work.module.scss";
import { WorkCarousel } from "./WorkCarousel";

export const Work = () => {
  const { projects } = useProjects();

  return (
    <section className="section" id="work">
      <div className="section__head reveal">
        <h2 className="section__title">Recent work</h2>
        <span className="mono">{"// 04 / SELECTED PROJECTS"}</span>
      </div>
      <WorkCarousel projects={projects} />
      <div className={`${styles.cta} reveal`}>
        <span className="mono">{"// MORE PROJECTS"}</span>
        <Link to={AppRoute.Projects} className={styles.ctaLink}>
          See all projects →
        </Link>
      </div>
    </section>
  );
};
