"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  applyDarkClass,
  getThemeOverride,
  persistUserOverride,
  resolveDarkMode,
} from "@/lib/theme-storage";
import { cn } from "@/lib/utils";

export type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const override = getThemeOverride();
    setIsDark(resolveDarkMode(override));
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (getThemeOverride() !== null) return;
      const dark = mq.matches;
      applyDarkClass(dark);
      setIsDark(dark);
    };

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    applyDarkClass(nextDark);
    persistUserOverride(nextDark);
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-border/45 bg-surface/35 text-muted-foreground transition-subtle",
        "hover:border-border/60 hover:bg-muted/35 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      disabled={!mounted}
    >
      {isDark ? <Sun className="h-4 w-4" strokeWidth={1.5} aria-hidden /> : <Moon className="h-4 w-4" strokeWidth={1.5} aria-hidden />}
    </button>
  );
}
