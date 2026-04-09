"use client";

import { useEffect, useState } from "react";

/**
 * Client-only breakpoint match (undefined until mounted — assume “no match” for layout that must avoid duplicate trees).
 */
export function useMediaMinWidth(px: number): boolean | undefined {
  const [matches, setMatches] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${px}px)`);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [px]);

  return matches;
}
