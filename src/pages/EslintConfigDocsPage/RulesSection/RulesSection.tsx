import { DocCard, SectionHeader } from "~components";

import { SECTION_IDS } from "../EslintConfigDocsPage.constants";
import { RULES_ENTRIES } from "./RulesSection.constants";
import styles from "./RulesSection.module.scss";

export const RulesSection = () => (
  <section id={SECTION_IDS.rules} className="section section--tight">
    <SectionHeader label="Custom rules" title="Custom Rules" count={RULES_ENTRIES.length} />
    <div className={styles.list}>
      {RULES_ENTRIES.map((entry) => (
        <DocCard key={entry.name} entry={entry} />
      ))}
    </div>
  </section>
);
