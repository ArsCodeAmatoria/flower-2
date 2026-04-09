export type SiteNavItem = { href: string; label: string };

export const SITE_NAV: readonly SiteNavItem[] = [
  { href: "/", label: "Home" },
  { href: "/script", label: "Script" },
  { href: "/characters", label: "Characters" },
  { href: "/sets", label: "Sets" },
  { href: "/lyrics", label: "Lyrics" },
  { href: "/archive", label: "Archive" },
  { href: "/pdfs", label: "PDFs" },
] as const;

/** True when this top-level route (or a nested segment) is active. */
export function isSiteNavActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
