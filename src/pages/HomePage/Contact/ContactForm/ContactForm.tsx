import cn from "classnames";

import { SERVICE_OPTIONS } from "./ContactForm.constants";
import { useContactForm } from "./ContactForm.hooks";
import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
  const { formik, submitStatus } = useContactForm();
  const { values, errors, onChange, onBlur, handleSubmit, isDisabled } = formik;

  const isLoading = submitStatus === "loading";

  return (
    <form
      className={`${styles.form} reveal reveal--right`}
      onSubmit={handleSubmit}
      noValidate
    >
      {submitStatus === "success" && (
        <div className={styles.success} role="status" aria-live="polite">
          Thanks. Your message is on its way. I will get back to you shortly.
        </div>
      )}

      {submitStatus === "error" && (
        <div className={styles.errorMsg} role="alert">
          Something went wrong. Please try again or email directly.
        </div>
      )}

      <div className={cn(styles.row, styles.row2)}>
        <div className={cn(styles.field, errors.name && styles.fieldError)}>
          <label htmlFor="f-name">Name</label>
          <input
            id="f-name"
            name="name"
            type="text"
            placeholder="Your name"
            value={values.name}
            onChange={onChange}
            onBlur={onBlur}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>
        <div className={cn(styles.field, errors.email && styles.fieldError)}>
          <label htmlFor="f-email">Email</label>
          <input
            id="f-email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={onChange}
            onBlur={onBlur}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>
      </div>

      <div className={cn(styles.row, styles.row2)}>
        <div className={styles.field}>
          <label htmlFor="f-company">Company</label>
          <input
            id="f-company"
            name="company"
            type="text"
            placeholder="Optional"
            value={values.company}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
        <div className={cn(styles.field, errors.service && styles.fieldError)}>
          <label htmlFor="f-service">What do you need</label>
          <select
            id="f-service"
            name="service"
            value={values.service}
            onChange={onChange}
            onBlur={onBlur}
          >
            <option value="" disabled>Pick one</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.service && <span className={styles.errorText}>{errors.service}</span>}
        </div>
      </div>

      <div className={cn(styles.field, errors.message && styles.fieldError)}>
        <label htmlFor="f-message">Project details</label>
        <textarea
          id="f-message"
          name="message"
          placeholder="Goals, timeline, anything you already have."
          value={values.message}
          onChange={onChange}
          onBlur={onBlur}
        />
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </div>

      <div className={styles.submitRow}>
        <span className={styles.note}>{"// REPLY WITHIN ONE BUSINESS DAY"}</span>
        <button
          type="submit"
          className="btn btn--primary"
          disabled={isDisabled || isLoading}
        >
          {isLoading ? "Sending…" : <>Send message <span className="arrow">→</span></>}
        </button>
      </div>
    </form>
  );
};
