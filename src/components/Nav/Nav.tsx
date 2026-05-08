import { useCallback } from "react";
import cn from "classnames";

import { NAV_ITEMS } from "./Nav.constants";
import { useNav } from "./Nav.hooks";
import styles from "./Nav.module.scss";

export const Nav = () => {
  const { activeId, isScrolled, onItemClickHandler } = useNav();

  const onNavItemClickHandler = useCallback(
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
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-nav-id={item.id}
            className={cn(styles.item, activeId === item.id && styles.itemActive)}
            aria-label={item.label}
            onClick={onNavItemClickHandler}
          >
            <span className={styles.itemIcon} aria-hidden="true">
              {item.icon}
            </span>
            <span className={styles.itemLabel}>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};
