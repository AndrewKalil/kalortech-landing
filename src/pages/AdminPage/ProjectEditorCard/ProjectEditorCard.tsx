import { useCallback, useRef } from "react";

import styles from "./ProjectEditorCard.module.scss";
import type { ProjectEditorCardProps } from "./ProjectEditorCard.types";

export const ProjectEditorCard = (props: ProjectEditorCardProps) => {
  const {
    entry,
    index,
    previewUrl,
    onChange,
    onFileChangeHandler,
    onDeleteHandler,
  } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onImageClickHandler = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const onFileInputChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) onFileChangeHandler(entry.id, file);
    },
    [entry.id, onFileChangeHandler],
  );

  const onDeleteClickHandler = useCallback(() => {
    onDeleteHandler(entry.id);
  }, [entry.id, onDeleteHandler]);

  const prefix = `entries.${index}.data`;
  const imageDisplay = previewUrl ?? entry.data.image;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.order}>#{entry.displayOrder}</span>
        <button type="button" className={styles.delete} onClick={onDeleteClickHandler}>
          Delete
        </button>
      </div>

      <button type="button" className={styles.imagePicker} onClick={onImageClickHandler}>
        {imageDisplay ? (
          <img src={imageDisplay} alt="Preview" className={styles.previewImg} />
        ) : (
          <span className={styles.imagePlaceholder}>Click to upload image</span>
        )}
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className={styles.fileInput}
        onChange={onFileInputChangeHandler}
      />

      <div className={styles.fields}>
        <div className={styles.row}>
          <label className={styles.label}>Title</label>
          <input
            name={`${prefix}.title`}
            value={entry.data.title}
            onChange={onChange}
            className={styles.input}
            placeholder="Project title"
          />
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Description</label>
          <textarea
            name={`${prefix}.description`}
            value={entry.data.description}
            onChange={onChange}
            className={styles.textarea}
            rows={3}
            placeholder="Short description"
          />
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Website URL</label>
          <input
            name={`${prefix}.websiteUrl`}
            value={entry.data.websiteUrl}
            onChange={onChange}
            className={styles.input}
            placeholder="https://example.com"
          />
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Category</label>
          <select
            name={`${prefix}.category`}
            value={entry.data.category}
            onChange={onChange}
            className={styles.select}
          >
            <option value="Library">Library</option>
            <option value="Website">Website</option>
          </select>
        </div>
        <div className={styles.row}>
          <label className={styles.label}>Tags (comma-separated)</label>
          <input
            name={`${prefix}.tags`}
            value={entry.data.tags.join(", ")}
            onChange={onChange}
            className={styles.input}
            placeholder="React, TypeScript, SCSS"
          />
        </div>
        <div className={styles.rowInline}>
          <label className={styles.label}>Featured</label>
          <input
            name={`${prefix}.isFeatured`}
            type="checkbox"
            checked={entry.data.isFeatured}
            onChange={onChange}
            className={styles.checkbox}
          />
        </div>
      </div>
    </div>
  );
};
