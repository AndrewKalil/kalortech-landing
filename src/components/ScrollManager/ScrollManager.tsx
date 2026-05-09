import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // Delay gives async data (e.g. projects carousel) time to render and
      // stabilise layout before the scroll position is calculated.
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);

  return null;
};
