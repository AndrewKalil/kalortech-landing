import { DocCard, SectionHeader } from "~components";

import { SECTION_IDS } from "../SharedLogicDocsPage.constants";
import { TESTING_ENTRIES } from "./TestingSection.constants";
import styles from "./TestingSection.module.scss";

export const TestingSection = () => (
  <section id={SECTION_IDS.testing} className="section section--tight">
    <SectionHeader label="Test utilities" title="Testing" count={TESTING_ENTRIES.length} />
    <p className={styles.importNote}>
      Import from <code className={styles.importPath}>@kalortech/shared-logic/testing</code>
    </p>
    <div className={styles.list}>
      {TESTING_ENTRIES.map((entry) => (
        <DocCard key={entry.name} entry={entry} />
      ))}
    </div>
  </section>
);
