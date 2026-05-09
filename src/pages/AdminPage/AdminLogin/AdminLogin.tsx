import { useAdminLogin } from "./AdminLogin.hooks";
import styles from "./AdminLogin.module.scss";

export const AdminLogin = () => {
  const { values, errors, onChange, handleSubmit, authError, isSubmitting } = useAdminLogin();

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <h1 className={styles.title}>Admin</h1>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            className={styles.input}
            placeholder="admin@kalortech.com"
            autoComplete="email"
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={onChange}
            className={styles.input}
            placeholder="••••••••"
            autoComplete="current-password"
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
        </div>
        {authError && <span className={styles.error}>{authError}</span>}
        <button type="submit" className={styles.submit} disabled={isSubmitting}>
          {isSubmitting ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
};
