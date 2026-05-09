import { Disclaimer } from "~components";

import { PACKAGE_META, SECTION_IDS } from "../EslintConfigDocsPage.constants";
import styles from "./HeroSection.module.scss";

export const HeroSection = () => (
  <section id={SECTION_IDS.hero} className={styles.root}>
    <div className={styles.inner}>
      <div className={styles.top}>
        <span className="mono">ESLint Config · v{PACKAGE_META.version}</span>
      </div>
      <h1 className={styles.title}>
        <span className={styles.pkg}>{PACKAGE_META.name}</span>
      </h1>
      <p className={styles.tagline}>{PACKAGE_META.tagline}</p>
      <p className={styles.desc}>
        6 composable config layers enforcing import order, named exports, no-default-export,
        type-only imports, and React hook rules. Ships with 6 custom kalortech rules
        and 8 restricted library imports.
      </p>
      <Disclaimer>
        This package is <strong>private</strong>. Contact me to get access.
      </Disclaimer>
    </div>
  </section>
);
