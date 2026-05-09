import { Disclaimer } from "~components";

import { PACKAGE_META, SECTION_IDS } from "../ClaudeAutoDocsPage.constants";
import styles from "./HeroSection.module.scss";

export const HeroSection = () => (
  <section id={SECTION_IDS.hero} className={styles.root}>
    <div className={styles.inner}>
      <div className={styles.top}>
        <span className="mono">Claude Code · Knowledge System</span>
      </div>
      <h1 className={styles.title}>
        <span className={styles.pkg}>{PACKAGE_META.tagline}</span>
      </h1>
      <p className={styles.tagline}>Single source of truth for React + Supabase project standards.</p>
      <p className={styles.desc}>
        A structured set of knowledge files, context templates, and hooks that make Claude Code
        self-sufficient across all kalortech projects. Auto-loaded at session start, injected
        before commits, and synchronized across machines.
      </p>
      <Disclaimer>
        This is a <strong>private</strong> configuration repository.
      </Disclaimer>
    </div>
  </section>
);
