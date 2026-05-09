import { useCallback, useEffect, useRef, useState } from "react";

import { NAV_ITEMS } from "./Nav.constants";

const SECTION_IDS = NAV_ITEMS.flatMap((item) => {
  if (!item.href) return [item.id];
  if (item.sectionId) return [item.sectionId];
  return [];
});

const HIDE_THRESHOLD = 80;

export const useNav = () => {
  const [activeId, setActiveId] = useState("top");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  const update = useCallback(() => {
    const { scrollY } = window;
    const line = scrollY + window.innerHeight * 0.33;
    let current = "top";

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= line) current = id;
    }

    if (window.innerHeight + scrollY >= document.body.offsetHeight - 4) {
      const lastId = SECTION_IDS[SECTION_IDS.length - 1];
      if (lastId) current = lastId;
    }

    setActiveId(current);
    setIsScrolled(scrollY > 12);

    const { current: prevScrollY } = lastScrollY;
    const scrollingDown = scrollY > prevScrollY;
    if (scrollY > HIDE_THRESHOLD && scrollingDown) {
      setIsHidden(true);
    } else if (!scrollingDown) {
      setIsHidden(false);
    }
    lastScrollY.current = scrollY;
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const onItemClickHandler = useCallback((id: string) => {
    setActiveId(id);
    setIsHidden(false);
  }, []);

  return { activeId, isScrolled, isHidden, onItemClickHandler };
};
