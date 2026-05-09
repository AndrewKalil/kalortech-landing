import { CodeBlock, SectionHeader } from "~components";

import { SECTION_IDS } from "../ClaudeAutoDocsPage.constants";
import { CLONE_COMMAND, SYNC_COMMANDS } from "./SetupSection.constants";
import styles from "./SetupSection.module.scss";

export const SetupSection = () => (
  <section id={SECTION_IDS.setup} className="section section--tight">
    <SectionHeader label="Getting started" title="Setup" />
    <div className={styles.grid}>
      <div className={styles.block}>
        <p className="mono" style={{ marginBottom: 10 }}>Clone</p>
        <CodeBlock code={CLONE_COMMAND} language="bash" />
        <p className={styles.note}>
          The repo clones directly into <code>~/.claude/</code> — the default
          Claude Code configuration directory.
        </p>
      </div>

      <div className={styles.block}>
        <p className="mono" style={{ marginBottom: 10 }}>Sync</p>
        <CodeBlock code={SYNC_COMMANDS} language="bash" />
        <p className={styles.note}>
          <code>sync.sh push</code> commits and pushes all local changes.{" "}
          <code>sync.sh pull</code> pulls the latest from remote.
          Run from <code>~/.claude/</code>.
        </p>
      </div>
    </div>
  </section>
);
