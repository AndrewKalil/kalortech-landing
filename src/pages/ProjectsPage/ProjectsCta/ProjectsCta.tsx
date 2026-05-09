import styles from "./ProjectsCta.module.scss";

export const ProjectsCta = () => (
  <div className={`${styles.cta} reveal`}>
    <p className={styles.text}>Have a project in mind?</p>
    <a href="/#contact" className={styles.link}>
      Get in touch →
    </a>
  </div>
);
