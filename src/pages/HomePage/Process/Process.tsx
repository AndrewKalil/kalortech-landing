import { PROCESS_STEPS } from "./Process.constants";
import { useProcess } from "./Process.hooks";
import styles from "./Process.module.scss";
import { ProcessStep } from "./ProcessStep";
import { ProgressBar } from "./ProgressBar";

export const Process = () => {
  const { fillPct, label, isBarVisible, onStepMouseEnterHandler, onStepMouseLeaveHandler } = useProcess();
  const totalSteps = PROCESS_STEPS.length;

  return (
    <section className="section section--tight" id="process">
      <div className="section__head section__head--progress reveal reveal--right">
        <h2 className="section__title">Process</h2>
        <span className="mono">{"// 03 / HOW WE WORK"}</span>
      </div>
      <ProgressBar fill={fillPct} label={label} isVisible={isBarVisible} />
      <div className={styles.grid}>
        {PROCESS_STEPS.map((stepData) => (
          <ProcessStep
            key={stepData.step}
            step={stepData.step}
            totalSteps={totalSteps}
            code={stepData.code}
            title={stepData.title}
            description={stepData.description}
            revealDir={stepData.revealDir}
            delay={stepData.delay}
            onMouseEnterHandler={onStepMouseEnterHandler}
            onMouseLeaveHandler={onStepMouseLeaveHandler}
          />
        ))}
      </div>
    </section>
  );
};
