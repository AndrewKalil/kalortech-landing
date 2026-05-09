import styles from "./ProjectsHeader.module.scss";

export const ProjectsHeader = () => (
  <header className={styles.header}>
    <span className={`mono ${styles.kicker}`}>{"// PROJECTS"}</span>
    <h1 className={`${styles.title} reveal`}>Selected work.</h1>
    <p className={`${styles.subtitle} reveal`}>
      A mix of internal tools, client platforms, and open-source libraries.
      Each project built with care and shipped clean.
    </p>
  </header>
);
