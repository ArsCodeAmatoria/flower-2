/** DOM id / URL hash anchor for a screenplay scene (stable across navigation). */
export function scriptSceneAnchorId(slug: string): string {
  return `script-scene-${slug}`;
}
