import { DocCard, SectionHeader } from "~components";

import { SECTION_IDS } from "../EslintConfigDocsPage.constants";
import { CONFIGS_ENTRIES } from "./ConfigsSection.constants";
import styles from "./ConfigsSection.module.scss";

export const ConfigsSection = () => (
  <section id={SECTION_IDS.configs} className="section section--tight">
    <SectionHeader label="Config layers" title="Config Layers" count={CONFIGS_ENTRIES.length} />
    <div className={styles.list}>
      {CONFIGS_ENTRIES.map((entry) => (
        <DocCard key={entry.name} entry={entry} />
      ))}
    </div>
  </section>
);
