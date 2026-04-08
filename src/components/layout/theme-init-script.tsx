import { THEME_STORAGE_KEY } from "@/lib/theme-storage";

/**
 * Inline script at top of `body`: explicit `light`/`dark` in localStorage wins;
 * otherwise follow `prefers-color-scheme` (trashpandas skin when dark).
 */
export function ThemeInitScript() {
  const js = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var t=localStorage.getItem(k);var dark=t==="dark"?!0:t==="light"?!1:window.matchMedia("(prefers-color-scheme: dark)").matches;if(dark)document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark");}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: js }} />;
}
