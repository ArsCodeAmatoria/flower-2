"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ExhibitionLayout,
  ExhibitionSidebarSection,
  exhibitionPageLabels,
  exhibitionStickySidebarClassName,
} from "@/components/layout/exhibition-layout";
import { scriptSceneAnchorId } from "@/lib/script-anchors";
import { ActNav } from "./act-nav";
import { BeatNav } from "./beat-nav";
import { PageSceneCounter } from "./page-scene-counter";
import { ReadingContextPanel, ScriptViewer } from "./script-viewer";
import { SceneNav } from "./scene-nav";
import { ScriptNotes } from "./script-notes";
import { ScriptSidebarTabs } from "./script-sidebar-tabs";
import { useScriptScrollSpy } from "./use-script-scroll-spy";
import type { ScriptExperienceProps } from "./types";

export function ScriptExperience({ scenes, characters, sets }: ScriptExperienceProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [actFilter, setActFilter] = useState<number | null>(null);

  const scene = scenes[activeIndex];
  const draftMaxPage = scenes.length ? Math.max(...scenes.map((s) => s.pageEnd)) : 0;

  const { suppressBriefly } = useScriptScrollSpy(null, scenes.length, setActiveIndex);

  const onSelectScene = useCallback(
    (index: number) => {
      if (index < 0 || index >= scenes.length) return;
      setActiveIndex(index);
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
    (act: number | null) => {
      setActFilter(act);
      if (act === null) return;
      const firstInAct = scenes.findIndex((s) => s.act === act);
      if (firstInAct >= 0) onSelectScene(firstInAct);
    },
    [scenes, onSelectScene],
  );

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

  return (
    <ExhibitionLayout
      pageLabel={exhibitionPageLabels.script}
      sidebarAriaLabel="Script navigation and notes"
      sidebarClassName={exhibitionStickySidebarClassName}
      sidebar={
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
              </ExhibitionSidebarSection>

              <ExhibitionSidebarSection title="Notes">
                <ScriptNotes scene={scene} />
              </ExhibitionSidebarSection>
            </div>
          }
        />
      }
    >
      <ScriptViewer scenes={scenes} activeIndex={activeIndex} />
    </ExhibitionLayout>
  );
}
