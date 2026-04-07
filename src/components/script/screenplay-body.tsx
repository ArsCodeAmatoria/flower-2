import { useMemo } from "react";
import { parseScreenplay, type ScreenplayBlock } from "@/lib/screenplay-blocks";
import { cn } from "@/lib/utils";

export type ScreenplayBodyProps = {
  content: string;
  className?: string;
};

function BlockView({ block }: { block: ScreenplayBlock }) {
  if (block.type === "transition") {
    return (
      <p
        className={cn(
          "my-9 text-center font-sans text-[13px] font-medium uppercase text-muted-foreground",
          "first:mt-4 last:mb-4",
        )}
      >
        {block.text}
      </p>
    );
  }

  if (block.type === "action") {
    return (
      <div className="space-y-3.5">
        {block.lines.map((line, i) => (
          <p
            key={i}
            className="max-w-readable text-[15px] leading-[1.75] text-foreground/90"
          >
            {line}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-10 space-y-0 first:mt-6">
      <p className="page-label mb-2.5 text-foreground/75">{block.character}</p>
      <div className="max-w-readable space-y-1 pl-6 sm:pl-8">
        {block.parts.map((part, i) =>
          part.type === "paren" ? (
            <p key={i} className="text-sm italic leading-relaxed text-muted-foreground">
              {part.text}
            </p>
          ) : (
            <p
              key={i}
              className="pb-2 text-[15px] leading-[1.75] text-foreground/92 last:pb-0"
            >
              {part.text}
            </p>
          ),
        )}
      </div>
    </div>
  );
}

/**
 * Screenplay body — manuscript rhythm, exhibition typography (no nested panels).
 */
export function ScreenplayBody({ content, className }: ScreenplayBodyProps) {
  const blocks = useMemo(() => parseScreenplay(content), [content]);

  return (
    <div className={cn("script-screenplay-body space-y-8 text-foreground", className)}>
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}
