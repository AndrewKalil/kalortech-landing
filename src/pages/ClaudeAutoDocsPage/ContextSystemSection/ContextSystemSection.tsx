import { SectionHeader } from "~components";

import { SECTION_IDS } from "../ClaudeAutoDocsPage.constants";
import { CONTEXT_TEMPLATES } from "./ContextSystemSection.constants";
import styles from "./ContextSystemSection.module.scss";

export const ContextSystemSection = () => (
  <section id={SECTION_IDS.context} className="section section--tight">
    <SectionHeader label="On-demand context" title="Context System" count={CONTEXT_TEMPLATES.length} />
    <div className={styles.list}>
      {CONTEXT_TEMPLATES.map((template) => (
        <div key={template.file} className={styles.card}>
          <div className={styles.cardHead}>
            <span className={styles.fileName}>{template.file}</span>
            <span className={styles.trigger}>{template.trigger}</span>
          </div>
          <p className={styles.desc}>{template.description}</p>
        </div>
      ))}
    </div>
  </section>
);
