"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ExhibitionLayout,
  ExhibitionSidebarSection,
  exhibitionPageLabels,
  exhibitionStickySidebarClassName,
} from "@/components/layout/exhibition-layout";
import { scriptSceneAnchorId } from "@/lib/script-anchors";
import type { ScriptActBlockId } from "@/lib/script-act-block";
import { sceneActBlock } from "@/lib/script-act-block";
import { printScriptSceneAtIndex } from "@/lib/script-print";
import { ActNav } from "./act-nav";
import { BeatNav } from "./beat-nav";
import { PageSceneCounter } from "./page-scene-counter";
import { ReadingContextPanel, ScriptViewer } from "./script-viewer";
import { SceneNav } from "./scene-nav";
import { ScriptNotes } from "./script-notes";
import { ScriptSceneCopyPlain } from "./script-scene-copy-plain";
import { ScriptMobileTools } from "./script-mobile-tools";
import { ScriptSceneSongPlayers } from "./script-scene-song-players";
import { ScriptSidebarTabs } from "./script-sidebar-tabs";
import { useScriptScrollSpy } from "./use-script-scroll-spy";
import type { ScriptExperienceProps } from "./types";
import { useMediaMinWidth } from "@/lib/use-media-min-width";
import { cn } from "@/lib/utils";

export function ScriptExperience({ scenes, characters, sets }: ScriptExperienceProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [actFilter, setActFilter] = useState<ScriptActBlockId | null>(null);
  const [toolsOpen, setToolsOpen] = useState(false);
  const isLg = useMediaMinWidth(1024);
  const showDesktopSidebar = isLg === true;

  const scene = scenes[activeIndex];
  const draftMaxPage = scenes.length ? Math.max(...scenes.map((s) => s.pageEnd)) : 0;

  const { suppressBriefly } = useScriptScrollSpy(null, scenes.length, setActiveIndex);

  const onSelectScene = useCallback(
    (index: number) => {
      if (index < 0 || index >= scenes.length) return;
      setActiveIndex(index);
      setToolsOpen(false);
      suppressBriefly();
      const slug = scenes[index].slug;
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", `#${slug}`);
        requestAnimationFrame(() => {
          document.getElementById(scriptSceneAnchorId(slug))?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
    },
    [scenes, suppressBriefly],
  );

  const onActFilter = useCallback(
    (block: ScriptActBlockId | null) => {
      setActFilter(block);
      if (block === null) return;
      const firstInBlock = scenes.findIndex((s) => sceneActBlock(s) === block);
      if (firstInBlock >= 0) onSelectScene(firstInBlock);
    },
    [scenes, onSelectScene],
  );

  const onDownloadScenePdf = useCallback(() => {
    printScriptSceneAtIndex(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash) return;
    const idx = scenes.findIndex((s) => s.slug === hash);
    if (idx >= 0) {
      setActiveIndex(idx);
      suppressBriefly();
      requestAnimationFrame(() => {
        document.getElementById(scriptSceneAnchorId(scenes[idx].slug))?.scrollIntoView({
          block: "start",
        });
      });
    }
  }, [scenes, suppressBriefly]);

  if (!scene) {
    return <p className="text-sm text-muted-foreground">No scenes in script data.</p>;
  }

  const scriptSidebar = (
    <div className="flex min-h-0 flex-col gap-6">
      <ScriptSceneSongPlayers scene={scene} />
      <ScriptSidebarTabs
        contextPanel={<ReadingContextPanel scene={scene} characters={characters} sets={sets} />}
        navigatePanel={
          <div className="space-y-9">
            <ExhibitionSidebarSection title="Acts">
              <ActNav scenes={scenes} actFilter={actFilter} onActFilter={onActFilter} />
            </ExhibitionSidebarSection>

            <ExhibitionSidebarSection title="Scenes">
              <SceneNav
                scenes={scenes}
                activeIndex={activeIndex}
                onSelectScene={onSelectScene}
                actFilter={actFilter}
              />
            </ExhibitionSidebarSection>

            <ExhibitionSidebarSection title="Beats">
              <BeatNav scenes={scenes} activeIndex={activeIndex} onSelectScene={onSelectScene} />
            </ExhibitionSidebarSection>
          </div>
        }
        readerPanel={
          <div className="space-y-9">
            <ExhibitionSidebarSection title="Page & scene">
              <PageSceneCounter
                scene={scene}
                sceneIndex={activeIndex}
                totalScenes={scenes.length}
                draftMaxPage={draftMaxPage}
              />
              <ScriptSceneCopyPlain scene={scene} className="mt-5" onDownloadScenePdf={onDownloadScenePdf} />
            </ExhibitionSidebarSection>

            <ExhibitionSidebarSection title="Notes">
              <ScriptNotes scene={scene} />
            </ExhibitionSidebarSection>
          </div>
        }
      />
    </div>
  );

  return (
    <>
      <ScriptMobileTools scene={scene} open={toolsOpen} onOpenChange={setToolsOpen}>
        {scriptSidebar}
      </ScriptMobileTools>

      <ExhibitionLayout
        className="script-page-layout"
        mainClassName={cn(
          "script-print-main",
          "pb-[calc(5.25rem+env(safe-area-inset-bottom,0px))] lg:pb-0",
        )}
        pageLabel={exhibitionPageLabels.script}
        sidebarAriaLabel="Script navigation and notes"
        sidebarClassName={cn(exhibitionStickySidebarClassName, !showDesktopSidebar && "hidden")}
        sidebar={showDesktopSidebar ? scriptSidebar : null}
      >
        <ScriptViewer scenes={scenes} activeIndex={activeIndex} />
      </ExhibitionLayout>
    </>
  );
}
