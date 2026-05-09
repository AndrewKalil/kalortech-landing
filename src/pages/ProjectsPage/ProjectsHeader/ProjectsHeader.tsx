import styles from "./ProjectsHeader.module.scss";

export const ProjectsHeader = () => (
  <header className={styles.header}>
    <span className={`mono ${styles.kicker}`}>{"// PROJECTS"}</span>
    <span className={`${styles.title} reveal`}>
      Selected <span style={{ color: "var(--volt)" }}>work.</span>
    </span>
    <p className={`${styles.subtitle} reveal`}>
      A mix of internal tools, client platforms, and open-source libraries. Each
      project built with care and shipped clean.
    </p>
  </header>
);
