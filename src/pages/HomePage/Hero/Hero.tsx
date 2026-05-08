import styles from "./Hero.module.scss";

export const Hero = () => (
  <section className={styles.hero} id="top">
    <div className={`${styles.kicker} mono`}>
      <span className="volt-square" />
      {"// A SOFTWARE STUDIO"}
    </div>
    <h1 className={styles.h1}>
      We build the software{" "}
      <span className={styles.hl}>that actually ships.</span>
    </h1>
    <p className={styles.sub}>
      Independent studio. Friendly process. Engineering grade craft.
      Five plus years across fintech and internal tooling, in a shop that gets things done.
    </p>
    <div className={styles.cta}>
      <a href="#contact" className="btn btn--primary">
        Start a project <span className="arrow">→</span>
      </a>
      <a href="#services" className="btn btn--ghost">
        See services
      </a>
    </div>
    <div className={styles.meta}>
      <div className={styles.metaItem}>
        <span className="mono">{"// LOCATION"}</span>
        <span className={styles.metaVal}>Barranquilla, Colombia</span>
      </div>
      <div className={styles.metaItem}>
        <span className="mono">{"// AVAILABILITY"}</span>
        <span className={styles.metaVal}>Remote, worldwide</span>
      </div>
      <div className={styles.metaItem}>
        <span className="mono">{"// STATUS"}</span>
        <span className={styles.metaVal}>Booking new work</span>
      </div>
    </div>
  </section>
);
