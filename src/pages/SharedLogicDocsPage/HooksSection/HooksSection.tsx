import { DocCard, SectionHeader } from "~components";

import { SECTION_IDS } from "../SharedLogicDocsPage.constants";
import { HOOKS_ENTRIES } from "./HooksSection.constants";
import styles from "./HooksSection.module.scss";

export const HooksSection = () => (
  <section id={SECTION_IDS.hooks} className="section section--tight">
    <SectionHeader label="React hooks" title="Hooks" count={HOOKS_ENTRIES.length} />
    <div className={styles.list}>
      {HOOKS_ENTRIES.map((entry) => (
        <DocCard key={entry.name} entry={entry} />
      ))}
    </div>
  </section>
);
