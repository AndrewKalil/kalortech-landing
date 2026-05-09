import { CodeBlock, SectionHeader } from "~components";

import { SECTION_IDS } from "../ClaudeAutoDocsPage.constants";
import { HOOK_SETUP_CODE, PRE_COMMIT_HOOK_CODE } from "./HooksSection.constants";
import styles from "./HooksSection.module.scss";

export const HooksSection = () => (
  <section id={SECTION_IDS.hooks} className="section section--tight">
    <SectionHeader label="Git hooks" title="Hooks" />
    <div className={styles.grid}>
      <div className={styles.block}>
        <h3 className={styles.hookName}>pre-commit-check.sh</h3>
        <p className={styles.hookDesc}>
          Automatically injects the review checklist into the terminal before every commit.
          Symlink it to <code>.git/hooks/pre-commit</code> in each project.
        </p>
        <CodeBlock code={PRE_COMMIT_HOOK_CODE} language="bash" />
      </div>

      <div className={styles.block}>
        <p className="mono" style={{ marginBottom: 10 }}>Setup in a project</p>
        <CodeBlock code={HOOK_SETUP_CODE} language="bash" />
      </div>
    </div>
  </section>
);
