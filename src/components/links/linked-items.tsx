import Link from "next/link";
import type { StoryLink } from "@/types/story-link";
import { cn } from "@/lib/utils";

const groupLabelClass = "wall-label";

export type LinkedItemsGroupProps = {
  label: string;
  items: StoryLink[];
  /** `list` — vertical rows with optional meta. `inline` — compact pills (e.g. script sidebar). */
  variant?: "list" | "inline";
  empty?: string;
  className?: string;
};

export function LinkedItemsGroup({
  label,
  items,
  variant = "list",
  empty = "—",
  className,
}: LinkedItemsGroupProps) {
  return (
    <section className={cn("space-y-2.5", className)}>
      <h3 className={groupLabelClass}>{label}</h3>
      {items.length === 0 ? (
        <p className="text-sm text-muted-foreground">{empty}</p>
      ) : variant === "inline" ? (
        <ul className="flex flex-wrap gap-2" aria-label={label}>
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                title={item.meta ? `${item.meta} · ${item.title}` : item.title}
                className={cn(
                  "pill pill--accent inline-flex max-w-full text-[0.625rem] font-medium tracking-wide transition-subtle",
                  "hover:border-accent/45 hover:bg-accent-subtle/55",
                )}
              >
                <span className="truncate">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-0.5" aria-label={label}>
          {items.map((item) => (
            <LinkedItemRow key={item.id} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}

export type LinkedItemRowProps = {
  item: StoryLink;
  className?: string;
};

export function LinkedItemRow({ item, className }: LinkedItemRowProps) {
  return (
    <li className={className}>
      <Link
        href={item.href}
        className={cn(
          "group block rounded-sm border border-transparent py-2 pl-0.5 pr-1 transition-[border-color,background-color] duration-subtle ease-exhibition",
          "hover:border-border/35 hover:bg-muted/18",
        )}
      >
        {item.meta ? (
          <span className="mb-0.5 block font-sans text-[0.62rem] font-medium uppercase tracking-[0.18em] text-muted-foreground/90">
            {item.meta}
          </span>
        ) : null}
        <span className="block font-sans text-sm leading-snug text-foreground/88 transition-colors group-hover:text-foreground">
          {item.title}
        </span>
      </Link>
    </li>
  );
}
