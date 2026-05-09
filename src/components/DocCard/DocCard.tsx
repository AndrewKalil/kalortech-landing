import { CodeBlock } from "../CodeBlock";
import styles from "./DocCard.module.scss";
import type { DocCardProps } from "./DocCard.types";

export const DocCard = (props: DocCardProps) => {
  const { entry } = props;
  const { name, description, signature, params, returnType, returnDescription, examples, notes } = entry;

  return (
    <div className={styles.root} id={`doc-${name}`}>
      <div className={styles.head}>
        <h3 className={styles.name}>{name}</h3>
        {signature && (
          <code className={styles.signature}>{signature}</code>
        )}
      </div>

      <p className={styles.description}>{description}</p>

      {params && params.length > 0 && (
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Parameters</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Required</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {params.map((param) => (
                <tr key={param.name}>
                  <td><code className={styles.code}>{param.name}</code></td>
                  <td><code className={styles.code}>{param.type}</code></td>
                  <td>{param.required ? "Yes" : "No"}</td>
                  <td>{param.defaultValue ?? "—"}</td>
                  <td>{param.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {returnType && (
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Returns</p>
          <code className={styles.returnType}>{returnType}</code>
          {returnDescription && <p className={styles.returnDesc}>{returnDescription}</p>}
        </div>
      )}

      {examples.length > 0 && (
        <div className={styles.section}>
          <p className={styles.sectionLabel}>
            {examples.length === 1 ? "Example" : "Examples"}
          </p>
          <div className={styles.examples}>
            {examples.map((ex, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={`${name}-ex-${i}`}>
                {ex.title && <p className={styles.exTitle}>{ex.title}</p>}
                <CodeBlock code={ex.code} language={ex.language} />
              </div>
            ))}
          </div>
        </div>
      )}

      {notes && notes.length > 0 && (
        <ul className={styles.notes}>
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
