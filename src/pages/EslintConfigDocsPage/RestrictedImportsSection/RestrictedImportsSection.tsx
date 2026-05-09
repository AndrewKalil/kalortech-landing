import { SectionHeader } from "~components";

import { SECTION_IDS } from "../EslintConfigDocsPage.constants";
import { RESTRICTED_IMPORTS } from "./RestrictedImportsSection.constants";
import styles from "./RestrictedImportsSection.module.scss";

export const RestrictedImportsSection = () => (
  <section id={SECTION_IDS.restricted} className="section section--tight">
    <SectionHeader label="Banned libraries" title="Restricted Imports" count={RESTRICTED_IMPORTS.length} />
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Library</th>
          <th>Use Instead</th>
        </tr>
      </thead>
      <tbody>
        {RESTRICTED_IMPORTS.map((row) => (
          <tr key={row.library}>
            <td><code className={styles.banned}>{row.library}</code></td>
            <td>{row.replacement}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);
