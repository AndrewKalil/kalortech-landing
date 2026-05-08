import { Mark } from "~components/Mark";

import styles from "./BigMark.module.scss";

export const BigMark = () => (
  <section className={styles.bigMark}>
    <div className={`${styles.inner} reveal reveal--up`}>
      <Mark size="lg" />
    </div>
  </section>
);
