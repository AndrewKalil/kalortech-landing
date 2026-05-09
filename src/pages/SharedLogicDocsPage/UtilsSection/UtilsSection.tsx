import { DocCard, SectionHeader } from "~components";

import { SECTION_IDS } from "../SharedLogicDocsPage.constants";
import { UTILS_ENTRIES } from "./UtilsSection.constants";
import styles from "./UtilsSection.module.scss";

export const UtilsSection = () => (
  <section id={SECTION_IDS.utils} className="section section--tight">
    <SectionHeader label="Pure utilities" title="Utilities" count={UTILS_ENTRIES.length} />
    <div className={styles.list}>
      {UTILS_ENTRIES.map((entry) => (
        <DocCard key={entry.name} entry={entry} />
      ))}
    </div>
  </section>
);
