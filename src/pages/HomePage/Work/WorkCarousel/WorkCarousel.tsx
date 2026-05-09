import cn from "classnames";

import { useCarousel } from "~hooks";

import { WorkCard } from "../WorkCard";
import styles from "./WorkCarousel.module.scss";
import type { WorkCarouselProps } from "./WorkCarousel.types";

const DESKTOP_VISIBLE = 3;

export const WorkCarousel = (props: WorkCarouselProps) => {
  const { projects } = props;

  const {
    cloneCount,
    isInfinite,
    extendedIndex,
    activeRealIndex,
    trackStyle,
    slideWidthPercent,
    onPrevHandler,
    onNextHandler,
    onDotClickHandler,
    onTransitionEndHandler,
    onPointerDownHandler,
    onPointerUpHandler,
  } = useCarousel(projects.length, DESKTOP_VISIBLE);

  if (projects.length === 0) return <div className={styles.placeholder} />;

  const extendedItems = isInfinite
    ? [
        ...projects.slice(-cloneCount).map((p, i) => ({ project: p, renderKey: `pre-${i}` })),
        ...projects.map((p) => ({ project: p, renderKey: p.id })),
        ...projects.slice(0, cloneCount).map((p, i) => ({ project: p, renderKey: `post-${i}` })),
      ]
    : projects.map((p) => ({ project: p, renderKey: p.id }));

  return (
    <div className={styles.carousel}>
      <div className={styles.overflow}>
        <div
          className={styles.track}
          style={trackStyle}
          onPointerDown={onPointerDownHandler}
          onPointerUp={onPointerUpHandler}
          onTransitionEnd={onTransitionEndHandler}
        >
          {extendedItems.map(({ project, renderKey }, index) => (
            <div
              key={renderKey}
              className={cn(styles.slide, index === extendedIndex && styles.slideActive)}
              style={{ width: `${slideWidthPercent}%` }}
            >
              <WorkCard project={project} />
            </div>
          ))}
        </div>
      </div>
      {isInfinite && (
        <div className={styles.controls}>
          <button className={styles.arrow} onClick={onPrevHandler} aria-label="Previous project">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className={styles.dots} role="tablist" aria-label="Project slides">
            {projects.map((project, index) => (
              <button
                key={project.id}
                data-dot-index={index}
                className={cn(styles.dot, index === activeRealIndex && styles.dotActive)}
                onClick={onDotClickHandler}
                aria-label={`Go to project ${index + 1}`}
                aria-selected={index === activeRealIndex}
                role="tab"
              />
            ))}
          </div>
          <button className={styles.arrow} onClick={onNextHandler} aria-label="Next project">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
