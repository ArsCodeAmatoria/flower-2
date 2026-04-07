/** Container for act heading + article; used to scope “this scene only” print. */
export const SCRIPT_VIEWER_SCENES_SELECTOR = ".script-viewer-scenes";

export function prepareScriptPrintFullDraft(): void {
  document.body.classList.remove("script-print-one-scene-mode");
  document.querySelectorAll(".script-print-scene-active").forEach((el) => {
    el.classList.remove("script-print-scene-active");
  });
}

export function printScriptFullDraft(): void {
  prepareScriptPrintFullDraft();
  window.print();
}

export function printScriptSceneAtIndex(sceneIndex: number): void {
  prepareScriptPrintFullDraft();
  const root = document.querySelector(SCRIPT_VIEWER_SCENES_SELECTOR);
  if (!root) {
    window.print();
    return;
  }
  const segments = root.querySelectorAll(".script-scene-segment");
  segments.forEach((el) => {
    el.classList.toggle(
      "script-print-scene-active",
      el.getAttribute("data-scene-index") === String(sceneIndex),
    );
  });
  document.body.classList.add("script-print-one-scene-mode");
  const cleanup = () => {
    document.body.classList.remove("script-print-one-scene-mode");
    segments.forEach((el) => el.classList.remove("script-print-scene-active"));
    window.removeEventListener("afterprint", cleanup);
  };
  window.addEventListener("afterprint", cleanup);
  window.print();
}
