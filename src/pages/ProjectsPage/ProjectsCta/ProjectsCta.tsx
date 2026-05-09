import { Link } from "react-router-dom";

import styles from "./ProjectsCta.module.scss";

export const ProjectsCta = () => (
  <div className={`${styles.cta} reveal`}>
    <p className={styles.text}>Have a project in mind?</p>
    <Link to="/#contact" className={styles.link}>
      Get in touch →
    </Link>
  </div>
);
