"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { printScriptFullDraft } from "@/lib/script-print";
import { scriptSceneAnchorId } from "@/lib/script-anchors";
import { formatActBlockCatalogue, formatActBlockNavLabel, sceneActBlock } from "@/lib/script-act-block";
import { stripScreenplayReaderMarkup } from "@/lib/screenplay-reader-markup";
import { stripLeadingDuplicateSlugline } from "@/lib/script-strip-slugline";
import { ScreenplayBody } from "./screenplay-body";
import type { ScriptContextPanelProps } from "./types";
import type { ScriptScene } from "@/types";
import { LinkedItemsGroup } from "@/components/links/linked-items";
import { flowerEase } from "@/lib/motion-presets";
import { equalizerPresenceLabels } from "@/lib/equalizer-presence";
import { sceneCharacterLinks, sceneSetLinks } from "@/lib/story-links";
import { project } from "@/data/project";
import { cn } from "@/lib/utils";

export type ScriptViewerProps = {
  scenes: ScriptScene[];
  activeIndex: number;
  className?: string;
};

/** Catalogue line — ACT block · SCENE · pages (shared ribbon + scene head). */
function ScriptCatalogueLine({
  scene,
  className,
}: {
  scene: ScriptScene;
  className?: string;
}) {
  const block = formatActBlockCatalogue(sceneActBlock(scene));
  return (
    <p className={cn("page-label", className)}>
      {block} · SCENE {scene.sceneNumber} · P. {scene.pageStart}–{scene.pageEnd}
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
      <p className="text-sm leading-[1.7] text-muted-foreground">{stripScreenplayReaderMarkup(beat)}</p>
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
      {project.themeStated ? (
        <p className="mb-4 border-b border-border/25 pb-4 text-[0.7rem] leading-snug text-muted-foreground">
          <span className="font-medium text-foreground/80">Theme stated — </span>
          {project.themeStated}
        </p>
      ) : null}
      {project.protagonistWant ? (
        <p className="mb-4 border-b border-border/25 pb-4 text-[0.7rem] leading-snug text-muted-foreground">
          <span className="font-medium text-foreground/80">Rose’s want — </span>
          {project.protagonistWant}
        </p>
      ) : null}
      {project.craftPilotScenes ? (
        <p className="mb-4 border-b border-border/25 pb-4 text-[0.7rem] leading-snug text-muted-foreground">
          <span className="font-medium text-foreground/80">Craft pilot — </span>
          {project.craftPilotScenes}
        </p>
      ) : null}
      {project.concreteStakes ? (
        <p className="mb-4 border-b border-border/25 pb-4 text-[0.7rem] leading-snug text-muted-foreground">
          <span className="font-medium text-foreground/80">Concrete stakes — </span>
          {project.concreteStakes}
        </p>
      ) : null}
      {project.audiencePrideBeats ? (
        <p className="mb-4 border-b border-border/25 pb-4 text-[0.7rem] leading-snug text-muted-foreground">
          <span className="font-medium text-foreground/80">Audience pride — </span>
          {project.audiencePrideBeats}
        </p>
      ) : null}
      {project.bStoryQuestion ? (
        <p className="mb-4 border-b border-border/25 pb-4 text-[0.7rem] leading-snug text-muted-foreground">
          <span className="font-medium text-foreground/80">B story — </span>
          {project.bStoryQuestion}
        </p>
      ) : null}
      <p className="page-label mb-4">Now reading</p>
      <h2 id={titleId} className="font-display text-xl font-medium tracking-tight text-foreground">
        {scene.title}
      </h2>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {formatActBlockNavLabel(sceneActBlock(scene))} · Scene {scene.sceneNumber}
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
        <p className="text-sm leading-relaxed text-muted-foreground">
          {stripScreenplayReaderMarkup(scene.beat)}
        </p>
      </motion.div>
      <p className="mt-4 leading-relaxed text-muted-foreground">
        {stripScreenplayReaderMarkup(scene.summary)}
      </p>

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
    <div className={cn("script-viewer-root space-y-5", className)}>
      <div className="flex flex-wrap items-end justify-between gap-4 print:hidden">
        <div className="space-y-1">
          <p className="page-label">Reader</p>
          <p className="font-sans text-xs text-muted-foreground">Screenplay — full draft</p>
        </div>
        <button
          type="button"
          onClick={() => printScriptFullDraft()}
          aria-label="Open print dialog to save the full script as PDF"
          className={cn(
            "rounded-sm border border-border/45 bg-surface/30 px-3 py-2 font-sans text-[0.75rem] font-medium uppercase tracking-wider",
            "text-foreground/90 transition-subtle hover:border-accent/35 hover:bg-accent-subtle/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
        >
          Download PDF
        </button>
      </div>

      <div className="relative w-full border-t border-border/25 pt-6 font-sans text-[15px] leading-[1.65] text-foreground">
        {active ? (
          <motion.div
            key={active.id + "-ribbon"}
            initial={{ opacity: 0.78 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: flowerEase }}
            className="script-viewer-sticky-ribbon sticky top-[3.25rem] z-20 -mx-1 border-b border-border/20 bg-background/90 px-1 py-3 print:hidden sm:top-14"
            role="status"
            aria-live="polite"
            aria-label={`Current scene: ${active.title}`}
          >
            <ScriptCatalogueLine scene={active} className="mb-1" />
            <p className="font-display text-lg font-medium tracking-tight text-foreground md:text-xl">
              {active.title}
            </p>
            <ScriptSlugline className="mt-1.5">{active.heading}</ScriptSlugline>
          </motion.div>
        ) : null}

        <div className="script-viewer-scenes space-y-0 pb-10 pt-3 print:pb-0 print:pt-2">
          {scenes.map((scene, i) => {
            const showActBreak = i > 0 && sceneActBlock(scenes[i - 1]!) !== sceneActBlock(scene);
            const isActive = activeIndex === i;
            return (
              <div key={scene.id} className="script-scene-segment" data-scene-index={i}>
                {showActBreak ? (
                  <h2 className="page-label border-b border-border/20 pb-6 pt-14 text-accent">
                    {formatActBlockNavLabel(sceneActBlock(scene))}
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
                    <ScriptCatalogueLine scene={scene} className="mb-3" />
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
