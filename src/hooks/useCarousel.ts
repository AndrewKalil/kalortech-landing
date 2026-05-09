import { useCallback, useEffect, useRef, useState } from "react";

const VISIBLE_DESKTOP = 3;
const VISIBLE_MOBILE = 1;
const SWIPE_THRESHOLD = 50;

const getVisibleCount = (desktopCount: number) =>
  window.innerWidth < 960 ? VISIBLE_MOBILE : desktopCount;

export const useCarousel = (itemCount: number, desktopVisible = VISIBLE_DESKTOP) => {
  const [visibleCount, setVisibleCount] = useState(() => getVisibleCount(desktopVisible));
  const isInfinite = itemCount > visibleCount;
  const cloneCount = isInfinite ? visibleCount : 0;

  const [extendedIndex, setExtendedIndex] = useState(cloneCount);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const dragStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    setTransitionEnabled(false);
    setExtendedIndex(cloneCount);
  }, [cloneCount]);

  const onResizeHandler = useCallback(() => {
    setVisibleCount(getVisibleCount(desktopVisible));
  }, [desktopVisible]);

  useEffect(() => {
    window.addEventListener("resize", onResizeHandler);
    return () => window.removeEventListener("resize", onResizeHandler);
  }, [onResizeHandler]);

  useEffect(() => {
    if (!transitionEnabled) {
      let id: number;
      const outer = requestAnimationFrame(() => {
        id = requestAnimationFrame(() => setTransitionEnabled(true));
      });
      return () => {
        cancelAnimationFrame(outer);
        cancelAnimationFrame(id);
      };
    }
  }, [transitionEnabled]);

  const onNextHandler = useCallback(() => {
    if (!isInfinite) return;
    setTransitionEnabled(true);
    setExtendedIndex((prev) => prev + 1);
  }, [isInfinite]);

  const onPrevHandler = useCallback(() => {
    if (!isInfinite) return;
    setTransitionEnabled(true);
    setExtendedIndex((prev) => prev - 1);
  }, [isInfinite]);

  const onTransitionEndHandler = useCallback(() => {
    if (!isInfinite) return;
    if (extendedIndex < cloneCount) {
      setTransitionEnabled(false);
      setExtendedIndex(extendedIndex + itemCount);
    } else if (extendedIndex >= cloneCount + itemCount) {
      setTransitionEnabled(false);
      setExtendedIndex(extendedIndex - itemCount);
    }
  }, [isInfinite, extendedIndex, cloneCount, itemCount]);

  const onDotClickHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!isInfinite) return;
      const index = Number(event.currentTarget.dataset.dotIndex);
      setTransitionEnabled(true);
      setExtendedIndex(cloneCount + index);
    },
    [isInfinite, cloneCount],
  );

  const onPointerDownHandler = useCallback((event: React.PointerEvent) => {
    dragStartRef.current = { x: event.clientX, y: event.clientY };
  }, []);

  const onPointerUpHandler = useCallback(
    (event: React.PointerEvent) => {
      if (!dragStartRef.current) return;
      const deltaX = event.clientX - dragStartRef.current.x;
      const deltaY = event.clientY - dragStartRef.current.y;
      dragStartRef.current = null;
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX < 0) onNextHandler();
        else onPrevHandler();
      }
    },
    [onNextHandler, onPrevHandler],
  );

  const slideWidthPercent = isInfinite ? 100 / visibleCount : 100 / Math.max(1, itemCount);
  const centerOffset = isInfinite ? Math.floor(visibleCount / 2) : 0;
  const trackTranslate = isInfinite ? -((extendedIndex - centerOffset) * slideWidthPercent) : 0;

  const trackStyle: React.CSSProperties = {
    transform: `translateX(${trackTranslate}%)`,
    transition: isInfinite && transitionEnabled ? undefined : "none",
  };

  const activeRealIndex = isInfinite
    ? ((extendedIndex - cloneCount) % itemCount + itemCount) % itemCount
    : 0;

  return {
    visibleCount,
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
  };
};
