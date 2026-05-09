import { CodeBlock, SectionHeader } from "~components";

import { SECTION_IDS } from "../SharedLogicDocsPage.constants";
import { CONSTANTS_ENTRIES, TYPES_ENTRIES } from "./ApiSection.constants";
import styles from "./ApiSection.module.scss";

export const ApiSection = () => (
  <section id={SECTION_IDS.api} className="section section--tight">
    <SectionHeader label="API Reference" title="API" />

    <div className={styles.block}>
      <p className={styles.blockLabel}>Constants</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Value</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {CONSTANTS_ENTRIES.map((entry) => (
            <tr key={entry.name}>
              <td><code className={styles.code}>{entry.name}</code></td>
              <td><code className={styles.code}>{entry.type}</code></td>
              <td><code className={styles.code}>{entry.value}</code></td>
              <td className={styles.desc}>{entry.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className={styles.block}>
      <p className={styles.blockLabel}>Types</p>
      <div className={styles.typesList}>
        {TYPES_ENTRIES.map((entry) => (
          <div key={entry.name} className={styles.typeCard}>
            <div className={styles.typeHead}>
              <code className={styles.typeName}>{entry.name}</code>
              <p className={styles.typeDesc}>{entry.description}</p>
            </div>
            <CodeBlock code={entry.definition} language="typescript" />
          </div>
        ))}
      </div>
    </div>
  </section>
);
