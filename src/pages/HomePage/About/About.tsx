import styles from "./About.module.scss";

export const About = () => (
  <section className="section" id="about">
    <div className="section__head reveal">
      <h2 className="section__title">About</h2>
      <span className="mono">{"// 04 / WHO IS BEHIND IT"}</span>
    </div>
    <div className={styles.grid}>
      <div className={`${styles.label} reveal`}>
        <span className="mono">{"// FOUNDER"}</span>
        <div className={styles.name}>Andrew Kalil</div>
        <div className={styles.role}>SOFTWARE ENGINEER · KALORTECH</div>
      </div>
      <div className={`${styles.copy} reveal reveal--right`}>
        <p>
          Kalortech is a one person studio with the option to scale up when a project calls for it.
          Five plus years of full stack engineering, mostly in fintech, building internal tools,
          client facing platforms, and the workflow automations that quietly hold companies together.
        </p>
        <p>
          The studio exists because most software work does not need a fifteen person agency.
          It needs{" "}
          <span className={styles.accent}>someone who actually writes the code,</span>
          {" "}understands the business behind it, and ships clean work without theatre.
        </p>
        <p>
          Based in Barranquilla, working remotely with teams in any timezone.
          Bilingual: English and Spanish.
        </p>
      </div>
    </div>
  </section>
);
