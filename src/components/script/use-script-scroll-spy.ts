"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Tracks which scene article sits in the focal band (IntersectionObserver).
 * Pass `null` for scrollRoot to use the viewport; otherwise the root is the scrollable reader pane.
 * Call `suppressBriefly` after programmatic `scrollIntoView` to avoid fighting the animation.
 */
export function useScriptScrollSpy(
  scrollRoot: HTMLDivElement | null,
  sceneCount: number,
  setActiveIndex: (i: number) => void,
) {
  const suppressUntilRef = useRef(0);

  const suppressBriefly = useCallback(() => {
    suppressUntilRef.current = Date.now() + 780;
  }, []);

  useEffect(() => {
    if (sceneCount === 0) return;

    const queryScene = (i: number) =>
      scrollRoot
        ? scrollRoot.querySelector(`[data-scene-index="${i}"]`)
        : document.querySelector(`[data-scene-index="${i}"]`);

    const nodes: Element[] = [];
    for (let i = 0; i < sceneCount; i++) {
      const el = queryScene(i);
      if (el) nodes.push(el);
    }
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < suppressUntilRef.current) return;
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        let best = visible[0]!;
        for (const e of visible) {
          if (e.intersectionRatio > best.intersectionRatio) best = e;
        }
        const raw = (best.target as HTMLElement).dataset.sceneIndex;
        const idx = raw !== undefined ? Number(raw) : NaN;
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      {
        root: scrollRoot,
        rootMargin: "-32% 0px -32% 0px",
        threshold: [0, 0.05, 0.1, 0.15, 0.25, 0.4, 0.55, 0.7, 0.85, 1],
      },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [scrollRoot, sceneCount, setActiveIndex]);

  return { suppressBriefly };
}
