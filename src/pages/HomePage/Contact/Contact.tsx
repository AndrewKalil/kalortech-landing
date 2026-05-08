import styles from "./Contact.module.scss";
import { ContactForm } from "./ContactForm";

export const Contact = () => (
  <section className="section" id="contact">
    <div className="section__head reveal reveal--right">
      <h2 className="section__title">Contact</h2>
      <span className="mono">{"// 05 / GET IN TOUCH"}</span>
    </div>
    <div className={styles.grid}>
      <div className={`${styles.lead} reveal`}>
        <span className="mono">
          <span className="volt-square" />
          {"// READY WHEN YOU ARE"}
        </span>
        <h3 className={styles.heading}>
          Have a project?
          <br />
          <span className={styles.hl}>Let us talk.</span>
        </h3>
        <p className={styles.subtext}>
          Tell me a bit about what you are building.
          I read every message and reply within one business day.
        </p>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className="mono">{"// EMAIL"}</span>
            <div className={styles.detailVal}>
              <a href="mailto:andrewkalil99@gmail.com">andrewkalil99@gmail.com</a>
            </div>
          </div>
          <div className={styles.detailItem}>
            <span className="mono">{"// PHONE"}</span>
            <div className={styles.detailVal}>+57 313 793 6776</div>
          </div>
          <div className={styles.detailItem}>
            <span className="mono">{"// HOURS"}</span>
            <div className={styles.detailVal}>Mon to Fri, GMT minus 5</div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
);
