import { SectionHeader } from "~components";

import { SECTION_IDS } from "../EslintConfigDocsPage.constants";
import { IMPORT_GROUPS, NAMING_CONVENTIONS } from "./ApiSection.constants";
import styles from "./ApiSection.module.scss";

export const ApiSection = () => (
  <section id={SECTION_IDS.api} className="section section--tight">
    <SectionHeader label="API Reference" title="API" />

    <div className={styles.block}>
      <p className={styles.blockLabel}>Import Order Groups</p>
      <div className={styles.groupList}>
        {IMPORT_GROUPS.map((group) => (
          <div key={group.name} className={styles.group}>
            <p className={styles.groupTitle}>{group.name}</p>
            <p className={styles.groupDesc}>{group.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className={styles.block}>
      <p className={styles.blockLabel}>Naming Conventions</p>
      <table className={styles.namingTable}>
        <thead>
          <tr>
            <th>Artifact</th>
            <th>Convention</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {NAMING_CONVENTIONS.map((row) => (
            <tr key={row.artifact}>
              <td>{row.artifact}</td>
              <td><code className={styles.code}>{row.convention}</code></td>
              <td className={styles.code}>{row.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);
