import cn from "classnames";

import styles from "./DocSideNav.module.scss";
import type { DocSideNavProps } from "./DocSideNav.types";

export const DocSideNav = (props: DocSideNavProps) => {
  const { sections, activeSection } = props;

  return (
    <nav className={styles.root}>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={cn(styles.item, activeSection === section.id && styles.active)}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
};
