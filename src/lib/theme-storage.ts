/** Persisted only when the user overrides system preference; absent = follow browser (`prefers-color-scheme`). */
export const THEME_STORAGE_KEY = "flower-theme";

export type ThemePreference = "light" | "dark";

/** Read raw storage: `null` means follow system. */
export function getThemeOverride(): ThemePreference | null {
  if (typeof window === "undefined") return null;
  const t = localStorage.getItem(THEME_STORAGE_KEY);
  if (t === "light" || t === "dark") return t;
  return null;
}

export function resolveDarkMode(override: ThemePreference | null): boolean {
  if (override === "dark") return true;
  if (override === "light") return false;
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function applyDarkClass(isDark: boolean): void {
  document.documentElement.classList.toggle("dark", isDark);
}

/** User chose the opposite of the current appearance (locks to explicit light/dark). */
export function persistUserOverride(isDark: boolean): void {
  localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
}
