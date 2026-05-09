import { CodeBlock, SectionHeader } from "~components";

import { PACKAGE_META, PEER_DEPS, SECTION_IDS } from "../SharedLogicDocsPage.constants";
import { IMPORT_EXAMPLE } from "./InstallSection.constants";
import styles from "./InstallSection.module.scss";

export const InstallSection = () => (
  <section id={SECTION_IDS.install} className="section section--tight">
    <SectionHeader label="Getting started" title="Installation" />
    <div className={styles.grid}>
      <div className={styles.block}>
        <p className="mono" style={{ marginBottom: 10 }}>Install</p>
        <CodeBlock code={PACKAGE_META.install} language="bash" />
        <p className={styles.note}>
          The package builds automatically on install via the <code>prepare</code> script.
          Use <strong>yalc</strong> when testing local changes before tagging a release.
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
        <p className="mono" style={{ marginBottom: 10 }}>Import</p>
        <CodeBlock code={IMPORT_EXAMPLE} language="typescript" />
      </div>
    </div>
  </section>
);
