import { useCallback, useEffect, useState } from "react";

import { NAV_ITEMS } from "./Nav.constants";

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export const useNav = () => {
  const [activeId, setActiveId] = useState("top");
  const [isScrolled, setIsScrolled] = useState(false);

  const update = useCallback(() => {
    const line = window.scrollY + window.innerHeight * 0.33;
    let current = "top";

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= line) current = id;
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
      const lastId = SECTION_IDS[SECTION_IDS.length - 1];
      if (lastId) current = lastId;
    }

    setActiveId(current);
    setIsScrolled(window.scrollY > 12);
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
  }, []);

  return { activeId, isScrolled, onItemClickHandler };
};
