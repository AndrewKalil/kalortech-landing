import { useCallback } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import { NAV_ITEMS } from "./Nav.constants";
import { useNav } from "./Nav.hooks";
import styles from "./Nav.module.scss";

export const Nav = () => {
  const { activeId, isScrolled, onItemClickHandler } = useNav();

  const onAnchorClickHandler = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      const id = event.currentTarget.getAttribute("data-nav-id");
      if (id) onItemClickHandler(id);
    },
    [onItemClickHandler],
  );

  return (
    <nav
      className={cn(styles.nav, isScrolled && styles.navScrolled)}
      aria-label="Primary"
    >
      <div className={styles.pill}>
        {NAV_ITEMS.map((item) =>
          item.href ? (
            <Link
              key={item.id}
              to={item.href}
              className={cn(styles.item, item.sectionId && activeId === item.sectionId && styles.itemActive)}
              aria-label={item.label}
            >
              <span className={styles.itemIcon} aria-hidden="true">
                {item.icon}
              </span>
              <span className={styles.itemLabel}>{item.label}</span>
            </Link>
          ) : (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-nav-id={item.id}
              className={cn(styles.item, activeId === item.id && styles.itemActive)}
              aria-label={item.label}
              onClick={onAnchorClickHandler}
            >
              <span className={styles.itemIcon} aria-hidden="true">
                {item.icon}
              </span>
              <span className={styles.itemLabel}>{item.label}</span>
            </a>
          ),
        )}
      </div>
    </nav>
  );
};
