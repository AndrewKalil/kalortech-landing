import { CodeBlock, SectionHeader } from "~components";

import { PACKAGE_META, SECTION_IDS } from "../EslintConfigDocsPage.constants";
import { ESLINT_CONFIG_EXAMPLE } from "./InstallSection.constants";
import styles from "./InstallSection.module.scss";

const PEER_DEPS = ["eslint >=9"];

export const InstallSection = () => (
  <section id={SECTION_IDS.install} className="section section--tight">
    <SectionHeader label="Getting started" title="Installation" />
    <div className={styles.grid}>
      <div className={styles.block}>
        <p className="mono" style={{ marginBottom: 10 }}>Install</p>
        <CodeBlock code={PACKAGE_META.install} language="bash" />
        <p className={styles.note}>
          Run <code>npx eslint --fix &lt;file&gt;</code> after every edit to auto-fix
          import order and style violations.
        </p>
      </div>

      <div className={styles.block}>
        <p className="mono" style={{ marginBottom: 10 }}>Peer Dependencies</p>
        <div className={styles.peerList}>
          {PEER_DEPS.map((dep) => (
            <code key={dep} className={styles.dep}>{dep}</code>
          ))}
        </div>
      </div>

      <div className={styles.block}>
        <p className="mono" style={{ marginBottom: 10 }}>eslint.config.js</p>
        <CodeBlock code={ESLINT_CONFIG_EXAMPLE} language="javascript" />
      </div>
    </div>
  </section>
);
