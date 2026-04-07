/**
 * Flower — restrained exhibition easing (no bounce, no snappy product motion).
 * Matches Tailwind `ease-exhibition` feel.
 */
export const flowerEase = [0.22, 1, 0.36, 1] as const;

export const flower = {
  page: {
    duration: 0.36,
    ease: flowerEase,
  },
  layout: {
    duration: 0.56,
    ease: flowerEase,
  },
  hover: {
    duration: 0.5,
    ease: flowerEase,
  },
  tap: {
    duration: 0.22,
    ease: flowerEase,
  },
  sidebar: {
    duration: 0.52,
    delay: 0.06,
    ease: flowerEase,
  },
  stagger: {
    delayChildren: 0.04,
    staggerChildren: 0.045,
  },
} as const;
