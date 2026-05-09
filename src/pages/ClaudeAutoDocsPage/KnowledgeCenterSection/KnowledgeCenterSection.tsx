import { SectionHeader } from "~components";

import { SECTION_IDS } from "../ClaudeAutoDocsPage.constants";
import { KNOWLEDGE_GROUPS } from "./KnowledgeCenterSection.constants";
import styles from "./KnowledgeCenterSection.module.scss";

export const KnowledgeCenterSection = () => (
  <section id={SECTION_IDS.knowledge} className="section section--tight">
    <SectionHeader label="Auto-loaded knowledge" title="Knowledge Center" />
    <div className={styles.groups}>
      {KNOWLEDGE_GROUPS.map((group) => (
        <div key={group.name} className={styles.group}>
          <div className={styles.groupHead}>
            <h3 className={styles.groupName}>{group.name}/</h3>
            <span className={styles.groupPath}>{group.path}</span>
          </div>
          <div className={styles.fileList}>
            {group.files.map((file) => (
              <div key={file.file} className={styles.fileRow}>
                <span className={styles.fileName}>{file.file}</span>
                <span className={styles.fileDesc}>{file.description}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
