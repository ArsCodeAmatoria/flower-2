import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type WallDefinitionRowProps = {
  /** `<dt>` — catalogue / wall label */
  term: string;
  /** `<dd>` body */
  children: ReactNode;
  /** Optional class on the definition value */
  detailsClassName?: string;
};

/**
 * Single term / definition pair for wall-text `<dl>` blocks (dossiers, project panel).
 */
export function WallDefinitionRow({ term, children, detailsClassName }: WallDefinitionRowProps) {
  return (
    <>
      <dt className="wall-label mb-1.5">{term}</dt>
      <dd
        className={cn(
          "mb-6 text-sm leading-relaxed text-foreground/88 last:mb-0",
          detailsClassName,
        )}
      >
        {children}
      </dd>
    </>
  );
}
