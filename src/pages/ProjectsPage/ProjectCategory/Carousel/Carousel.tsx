import cn from "classnames";

import { ProjectCard } from "../ProjectCard";
import { useCarousel } from "./Carousel.hooks";
import styles from "./Carousel.module.scss";
import type { CarouselProps } from "./Carousel.types";

export const Carousel = (props: CarouselProps) => {
  const { items } = props;
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
  } = useCarousel(items.length);

  const extendedItems = isInfinite
    ? [
        ...items.slice(-cloneCount).map((p, i) => ({ project: p, renderKey: `pre-${i}` })),
        ...items.map((p) => ({ project: p, renderKey: p.id })),
        ...items.slice(0, cloneCount).map((p, i) => ({ project: p, renderKey: `post-${i}` })),
      ]
    : items.map((p) => ({ project: p, renderKey: p.id }));

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
              <ProjectCard project={project} />
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
            {items.map((item, index) => (
              <button
                key={item.id}
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
