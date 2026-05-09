import { Link } from "react-router-dom";

import { Mark } from "~components";
import { AppRoute } from "~constants";

import styles from "./ProjectsNav.module.scss";

export const ProjectsNav = () => (
  <nav className={styles.nav} aria-label="Projects page navigation">
    <div className={styles.pill}>
      <Link to={AppRoute.Home} className={styles.back} aria-label="Back to home">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back
      </Link>
      <div className={styles.divider} aria-hidden="true" />
      <Mark size="xs" />
    </div>
  </nav>
);
