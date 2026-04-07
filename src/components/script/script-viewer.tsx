"use client";

import { Fragment, type ReactNode } from "react";
import { motion } from "framer-motion";
import { scriptSceneAnchorId } from "@/lib/script-anchors";
import { stripLeadingDuplicateSlugline } from "@/lib/script-strip-slugline";
import { ScreenplayBody } from "./screenplay-body";
import type { ScriptContextPanelProps } from "./types";
import type { ScriptScene } from "@/types";
import { LinkedItemsGroup } from "@/components/links/linked-items";
import { flowerEase } from "@/lib/motion-presets";
import { equalizerPresenceLabels } from "@/lib/equalizer-presence";
import { sceneCharacterLinks, sceneSetLinks } from "@/lib/story-links";
import { cn } from "@/lib/utils";

export type ScriptViewerProps = {
  scenes: ScriptScene[];
  activeIndex: number;
  className?: string;
};

/** Catalogue line — ACT · SCENE · pages (shared ribbon + scene head). */
function ScriptCatalogueLine({
  act,
  sceneNumber,
  pageStart,
  pageEnd,
  className,
}: {
  act: number;
  sceneNumber: string;
  pageStart: number;
  pageEnd: number;
  className?: string;
}) {
  return (
    <p className={cn("page-label", className)}>
      ACT {act} · SCENE {sceneNumber} · P. {pageStart}–{pageEnd}
    </p>
  );
}

/** Scene slugline (INT./EXT.) — same scale and color as screenplay action. */
function ScriptSlugline({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "max-w-readable text-[15px] font-normal uppercase leading-[1.75] text-foreground/90",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** Exhibition beat note — one wall-text pattern, not a mixed label + body style. */
function ScriptBeatNote({ beat }: { beat: string }) {
  return (
    <aside className="mt-8 max-w-readable border-l border-border/35 pl-4">
      <p className="page-label mb-2.5">Beat</p>
      <p className="text-sm leading-[1.7] text-muted-foreground">{beat}</p>
    </aside>
  );
}

/** Sticky gallery card — current scene context (sidebar). */
export function ReadingContextPanel({ scene, characters, sets }: ScriptContextPanelProps) {
  const characterLinks = sceneCharacterLinks(scene, characters);
  const setLinks = sceneSetLinks(scene, sets);
  const titleId = `reading-context-${scene.id}`;

  return (
    <section className="wall-caption-card" aria-labelledby={titleId}>
      <p className="page-label mb-4">Now reading</p>
      <h2 id={titleId} className="font-display text-xl font-medium tracking-tight text-foreground">
        {scene.title}
      </h2>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Act {scene.act} · Scene {scene.sceneNumber}
      </p>
      <p className="mt-3 text-[0.7rem] leading-snug text-muted-foreground">
        <span className="font-medium text-foreground/80">Equalizer — </span>
        <span className="capitalize">{scene.equalizerPresence}</span>
        <span className="text-muted-foreground/90"> — {equalizerPresenceLabels[scene.equalizerPresence]}</span>
      </p>
      <motion.div
        key={scene.id + "-beat"}
        initial={{ opacity: 0.75 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: flowerEase }}
        className="mt-4 border-l border-border/35 pl-4"
      >
        <p className="page-label mb-2">Beat</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{scene.beat}</p>
      </motion.div>
      <p className="mt-4 leading-relaxed text-muted-foreground">{scene.summary}</p>

      <div className="mt-6 space-y-6 border-t border-border/30 pt-6">
        <LinkedItemsGroup label="In this scene" items={characterLinks} variant="inline" />
        <LinkedItemsGroup label="Location" items={setLinks} variant="list" />
      </div>
    </section>
  );
}

/**
 * Full screenplay reader: framed column, sticky scene ribbon, anchored scene articles (page scroll).
 */
export function ScriptViewer({ scenes, activeIndex, className }: ScriptViewerProps) {
  const active = scenes[activeIndex];

  return (
    <div className={cn("space-y-5", className)}>
      <div className="space-y-1">
        <p className="page-label">Reader</p>
        <p className="font-sans text-xs text-muted-foreground">Screenplay — full draft</p>
      </div>

      <div className="relative w-full border-t border-border/25 pt-6 font-sans text-[15px] leading-[1.65] text-foreground">
        {active ? (
          <motion.div
            key={active.id + "-ribbon"}
            initial={{ opacity: 0.78 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: flowerEase }}
            className="sticky top-[3.25rem] z-20 -mx-1 border-b border-border/20 bg-background/90 px-1 py-3 sm:top-14"
            role="status"
            aria-live="polite"
            aria-label={`Current scene: ${active.title}`}
          >
            <ScriptCatalogueLine
              act={active.act}
              sceneNumber={active.sceneNumber}
              pageStart={active.pageStart}
              pageEnd={active.pageEnd}
              className="mb-1"
            />
            <p className="font-display text-lg font-medium tracking-tight text-foreground md:text-xl">
              {active.title}
            </p>
            <ScriptSlugline className="mt-1.5">{active.heading}</ScriptSlugline>
          </motion.div>
        ) : null}

        <div className="script-viewer-scenes space-y-0 pb-10 pt-3">
          {scenes.map((scene, i) => {
            const showActBreak = i > 0 && scenes[i - 1]!.act !== scene.act;
            const isActive = activeIndex === i;
            return (
              <Fragment key={scene.id}>
                {showActBreak ? (
                  <h2 className="page-label border-b border-border/20 pb-6 pt-14 text-accent">
                    Act {scene.act}
                  </h2>
                ) : null}
                <motion.article
                  id={scriptSceneAnchorId(scene.slug)}
                  data-scene-index={i}
                  layout={false}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.35, ease: flowerEase }}
                  className={cn(
                    "scroll-mt-[calc(3.25rem+5.5rem)] border-t border-border/15 py-12 transition-opacity duration-300 ease-exhibition sm:scroll-mt-[calc(3.5rem+5.5rem)]",
                    "first:border-t-0 first:pt-2",
                    isActive ? "border-l-2 border-accent/45 pl-5 sm:pl-6" : "border-l-2 border-transparent pl-5 sm:pl-6",
                  )}
                  aria-label={`Scene ${scene.sceneNumber}: ${scene.title}`}
                >
                  <header className="mb-12 max-w-readable space-y-0">
                    <ScriptCatalogueLine
                      act={scene.act}
                      sceneNumber={scene.sceneNumber}
                      pageStart={scene.pageStart}
                      pageEnd={scene.pageEnd}
                      className="mb-3"
                    />
                    <h2 className="font-display text-2xl font-medium tracking-tight text-foreground md:text-[1.7rem]">
                      {scene.title}
                    </h2>
                    <ScriptSlugline className="mt-3">{scene.heading}</ScriptSlugline>
                    <ScriptBeatNote beat={scene.beat} />
                  </header>

                  <ScreenplayBody
                    content={stripLeadingDuplicateSlugline(scene.content.trim(), scene.heading)}
                  />
                </motion.article>
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
