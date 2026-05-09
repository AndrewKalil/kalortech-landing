import { Disclaimer } from "~components";

import { PACKAGE_META, SECTION_IDS } from "../SharedLogicDocsPage.constants";
import styles from "./HeroSection.module.scss";

export const HeroSection = () => (
  <section id={SECTION_IDS.hero} className={styles.root}>
    <div className={styles.inner}>
      <div className={styles.top}>
        <span className="mono">Library · v{PACKAGE_META.version}</span>
      </div>
      <h1 className={styles.title}>
        <span className={styles.pkg}>{PACKAGE_META.name}</span>
      </h1>
      <p className={styles.tagline}>{PACKAGE_META.tagline}</p>
      <p className={styles.desc}>
        8 hooks and 13 utilities shared across all kalortech projects.
        Covers form management, server state, draft tracking, navigation,
        data transforms, and testing infrastructure.
      </p>
      <Disclaimer>
        This package is <strong>private</strong>. Contact me to get access.
      </Disclaimer>
    </div>
  </section>
);
