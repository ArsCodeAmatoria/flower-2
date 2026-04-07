"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ScriptSidebarTabId = "context" | "navigate" | "reader";

const TABS: { id: ScriptSidebarTabId; label: string }[] = [
  { id: "context", label: "Context" },
  { id: "navigate", label: "Navigate" },
  { id: "reader", label: "Reader" },
];

export type ScriptSidebarTabsProps = {
  contextPanel: ReactNode;
  navigatePanel: ReactNode;
  readerPanel: ReactNode;
  /** Initial tab (default: context). */
  defaultTab?: ScriptSidebarTabId;
  className?: string;
};

/**
 * Script sidebar: tabbed panels so a sticky “hero” card cannot overlap long scroll sections.
 */
export function ScriptSidebarTabs({
  contextPanel,
  navigatePanel,
  readerPanel,
  defaultTab = "context",
  className,
}: ScriptSidebarTabsProps) {
  const baseId = useId();
  const [active, setActive] = useState<ScriptSidebarTabId>(defaultTab);

  const panels: Record<ScriptSidebarTabId, ReactNode> = {
    context: contextPanel,
    navigate: navigatePanel,
    reader: readerPanel,
  };

  return (
    <div className={cn("flex min-h-0 flex-col text-sm", className)}>
      <div
        className="sticky top-0 z-10 -mx-1 mb-5 border-b border-border/35 bg-background/92 px-1 pb-3 pt-0 backdrop-blur-md supports-[backdrop-filter]:bg-background/80"
        role="tablist"
        aria-label="Script sidebar sections"
      >
        <div className="flex flex-wrap gap-1">
          {TABS.map(({ id, label }) => {
            const selected = active === id;
            const tabId = `${baseId}-${id}-tab`;
            const panelId = `${baseId}-${id}-panel`;
            return (
              <button
                key={id}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(id)}
                onKeyDown={(e) => {
                  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                  e.preventDefault();
                  const i = TABS.findIndex((t) => t.id === active);
                  const next =
                    e.key === "ArrowRight"
                      ? TABS[(i + 1) % TABS.length]!
                      : TABS[(i - 1 + TABS.length) % TABS.length]!;
                  setActive(next.id);
                  document.getElementById(`${baseId}-${next.id}-tab`)?.focus();
                }}
                className={cn(
                  "rounded-sm border px-2.5 py-1.5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] transition-subtle",
                  selected
                    ? "border-accent/40 bg-accent-subtle/[0.12] text-foreground"
                    : "border-transparent text-muted-foreground hover:border-border/50 hover:text-foreground/85",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {TABS.map(({ id }) => (
        <div
          key={id}
          id={`${baseId}-${id}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-${id}-tab`}
          hidden={active !== id}
          className="min-h-0 min-w-0"
        >
          {panels[id]}
        </div>
      ))}
    </div>
  );
}
