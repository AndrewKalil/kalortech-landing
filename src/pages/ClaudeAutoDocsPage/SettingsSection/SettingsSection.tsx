import { SectionHeader } from "~components";

import { SECTION_IDS } from "../ClaudeAutoDocsPage.constants";
import { PLUGINS } from "./SettingsSection.constants";
import styles from "./SettingsSection.module.scss";

export const SettingsSection = () => (
  <section id={SECTION_IDS.settings} className="section section--tight">
    <SectionHeader label="Claude Code plugins" title="Settings" count={PLUGINS.length} />
    <div className={styles.list}>
      {PLUGINS.map((plugin) => (
        <div key={plugin.name} className={styles.card}>
          <div className={styles.cardHead}>
            <h3 className={styles.pluginName}>{plugin.name}</h3>
          </div>
          <p className={styles.desc}>{plugin.description}</p>
          <div className={styles.triggerRow}>
            <span className={styles.triggerLabel}>Trigger</span>
            <span className={styles.triggerText}>{plugin.trigger}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);
