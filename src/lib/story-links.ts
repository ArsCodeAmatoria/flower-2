import type { Character, FilmSet, ScriptScene } from "@/types";
import type { StoryLink } from "@/types/story-link";
import { scriptScenes } from "@/data/script";
import { sets } from "@/data/sets";

function scriptSceneById(sceneId: string): ScriptScene | undefined {
  return scriptScenes.find((s) => s.id === sceneId);
}

function toScriptStoryLink(sceneId: string): StoryLink {
  const scene = scriptSceneById(sceneId);
  return {
    id: sceneId,
    href: scene ? `/script#${scene.slug}` : "/script",
    title: scene?.title ?? sceneId,
    meta: scene ? `Act ${scene.act} · Scene ${scene.sceneNumber}` : undefined,
  };
}

/** Links from a screenplay scene to character dossiers (script sidebar). */
export function sceneCharacterLinks(scene: ScriptScene, characters: Character[]): StoryLink[] {
  return scene.characters.map((id) => {
    const c = characters.find((x) => x.id === id || x.slug === id);
    return {
      id,
      href: c ? `/characters/${c.slug}` : "/characters",
      title: c?.name ?? id,
      meta: c?.role,
    };
  });
}

/** At most one set link per scene (script sidebar). */
export function sceneSetLinks(scene: ScriptScene, filmSets: FilmSet[]): StoryLink[] {
  if (!scene.setId) return [];
  const s = filmSets.find((x) => x.id === scene.setId || x.slug === scene.setId);
  return [
    {
      id: scene.setId,
      href: s ? `/sets/${s.slug}` : "/sets",
      title: s?.name ?? scene.setId,
      meta: s ? "Set" : undefined,
    },
  ];
}

/** Links from a character dossier to script anchors. */
export function characterSceneLinks(character: Character): StoryLink[] {
  return character.linkedSceneIds.map(toScriptStoryLink);
}

/** Links from a character dossier to set pages. */
export function characterSetLinks(character: Character): StoryLink[] {
  return character.linkedSetIds.map((id) => {
    const item = sets.find((s) => s.id === id || s.slug === id);
    return {
      id,
      href: item ? `/sets/${item.slug}` : "/sets",
      title: item?.name ?? id,
      meta: item ? "Set" : undefined,
    };
  });
}

/** Links from a set dossier to script anchors. */
export function setSceneLinks(filmSet: FilmSet): StoryLink[] {
  return filmSet.linkedSceneIds.map(toScriptStoryLink);
}
