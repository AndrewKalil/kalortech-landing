import { useCallback, useRef, useState } from "react";

export const useProcess = () => {
  const [fillPct, setFillPct] = useState(0);
  const [label, setLabel] = useState("0/4");
  const [isBarVisible, setIsBarVisible] = useState(false);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onStepMouseEnterHandler = useCallback((step: number, total: number) => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    const value = (step / total) * 100;
    setFillPct(value);
    setLabel(`${step}/${total}`);
    setIsBarVisible(true);
  }, []);

  const onStepMouseLeaveHandler = useCallback(() => {
    leaveTimerRef.current = setTimeout(() => {
      setFillPct(0);
      setIsBarVisible(false);
    }, 50);
  }, []);

  return { fillPct, label, isBarVisible, onStepMouseEnterHandler, onStepMouseLeaveHandler };
};
