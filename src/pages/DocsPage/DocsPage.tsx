import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { DocSideNav, Footer } from "~components";

import { DOCS_CONFIGS } from "./DocsPage.constants";
import { useActiveSection } from "./DocsPage.hooks";
import styles from "./DocsPage.module.scss";

export const DocsPage = () => {
  const location = useLocation();
  const slug = location.pathname.split("/docs/")[1]?.split("/")[0] ?? "";
  const config = DOCS_CONFIGS[slug];
  const sections = config?.navSections ?? [];
  const activeSection = useActiveSection(sections);

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.back}>
          <ArrowLeft size={14} />
          Home
        </Link>
        {config && (
          <div className={styles.pill}>
            <div className={styles.logo}>
              <span className={styles.dot} />
              <span className={styles.name}>{config.packageName}</span>
              <span className={styles.version}>v{config.version}</span>
            </div>
            {config.github && (
              <a
                href={config.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
                aria-label="GitHub"
              >
                <ExternalLink size={14} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        )}
      </header>
      <div className={styles.layout}>
        <DocSideNav sections={sections} activeSection={activeSection} />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};
