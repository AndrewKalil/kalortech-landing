import { AdminLogin } from "./AdminLogin";
import { useAdminPage } from "./AdminPage.hooks";
import styles from "./AdminPage.module.scss";
import { ProjectEditorCard } from "./ProjectEditorCard";

export const AdminPage = () => {
  const {
    session,
    values,
    onChange,
    handleSubmit,
    isSaving,
    saveError,
    previewUrls,
    onAddProjectHandler,
    onDeleteEntryHandler,
    onFileChangeHandler,
    onSignOutHandler,
    onCancelHandler,
  } = useAdminPage();

  if (session === null) return null;
  if (!session) return <AdminLogin />;

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}>Projects Admin</h1>
        <div className={styles.headerActions}>
          <button type="button" className={styles.btnSecondary} onClick={onSignOutHandler}>
            Sign out
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <div className={styles.grid}>
            {values.entries.map((entry, index) => (
              <ProjectEditorCard
                key={entry.id}
                entry={entry}
                index={index}
                previewUrl={previewUrls[entry.id]}
                onChange={onChange}
                onFileChangeHandler={onFileChangeHandler}
                onDeleteHandler={onDeleteEntryHandler}
              />
            ))}
          </div>

          <div className={styles.footer}>
            <button
              type="button"
              className={styles.btnSecondary}
              onClick={onAddProjectHandler}
            >
              + Add project
            </button>
            <div className={styles.footerRight}>
              {saveError && <span className={styles.error}>{saveError}</span>}
              <button
                type="button"
                className={styles.btnSecondary}
                onClick={onCancelHandler}
                disabled={isSaving}
              >
                Cancel
              </button>
              <button type="submit" className={styles.btnPrimary} disabled={isSaving}>
                {isSaving ? "Saving…" : "Save all"}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};
