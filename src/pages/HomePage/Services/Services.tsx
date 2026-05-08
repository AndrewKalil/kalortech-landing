import { ServiceCard } from "./ServiceCard";
import { SERVICES_DATA } from "./Services.constants";
import styles from "./Services.module.scss";

const REVEAL_DIRS: Array<"left" | "right"> = ["left", "right", "left", "right", "left", "right"];
const DELAYS = [0, 80, 160, 0, 80, 160];

export const Services = () => (
  <section className="section" id="services">
    <div className="section__head reveal">
      <h2 className="section__title">Services</h2>
      <span className="mono">{"// 02 / WHAT WE DO"}</span>
    </div>
    <div className={styles.grid}>
      {SERVICES_DATA.map((service, index) => (
        <ServiceCard
          key={service.num}
          {...service}
          revealDir={REVEAL_DIRS[index]}
          delay={DELAYS[index]}
        />
      ))}
    </div>
  </section>
);
