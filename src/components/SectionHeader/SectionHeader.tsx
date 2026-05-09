import styles from "./SectionHeader.module.scss";
import type { SectionHeaderProps } from "./SectionHeader.types";

export const SectionHeader = (props: SectionHeaderProps) => {
  const { label, title, count } = props;

  return (
    <div className="section__head">
      <h2 className="section__title">{title}</h2>
      <div className={styles.meta}>
        <span className="mono">{label}</span>
        {count !== undefined && (
          <span className={styles.badge}>{count}</span>
        )}
      </div>
    </div>
  );
};
