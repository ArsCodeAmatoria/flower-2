import Link from "next/link";
import { pdfDocuments } from "@/data/pdf-items";
import { scriptScenes } from "@/data/script";
import { exhibitionPageLabels } from "@/components/layout/exhibition-layout";
import {
  formatActBlockNavLabel,
  sceneActBlock,
  SCRIPT_ACT_BLOCK_ORDER,
} from "@/lib/script-act-block";
import type { ScriptScene } from "@/types";

const docCardClassName =
  "block rounded-panel border border-border/40 bg-surface/15 p-6 shadow-frame-inset transition-subtle hover:border-border/55 hover:bg-surface/25";

function ScenePdfLink({ scene }: { scene: ScriptScene }) {
  const block = sceneActBlock(scene);
  return (
    <Link href={`/script#${encodeURIComponent(scene.slug)}`} className={docCardClassName}>
      <span className="font-display text-lg font-medium tracking-tight text-foreground">{scene.title}</span>
      <span className="mt-2 block font-sans text-sm leading-relaxed text-muted-foreground">
        {formatActBlockNavLabel(block)} · Scene {scene.sceneNumber} · P. {scene.pageStart}–{scene.pageEnd}
      </span>
      <span className="mt-3 block font-sans text-[0.7rem] leading-snug text-muted-foreground">
        In the reader: Reader tab → Download scene as PDF, then Print → Save as PDF.
      </span>
      <span className="mt-3 block font-mono text-[0.65rem] text-muted-foreground/90">#{scene.slug}</span>
    </Link>
  );
}

export default function PdfsPage() {
  return (
    <section className="space-y-14 md:space-y-20">
      <header className="max-w-2xl space-y-4">
        <p className="page-label">
          {exhibitionPageLabels.pdfs.suite} / {exhibitionPageLabels.pdfs.facet}
        </p>
        <h1 className="title-display">PDFs</h1>
        <p className="subtitle">
          Static files live in{" "}
          <code className="font-mono text-[0.9em] text-foreground/75">public/pdfs/</code> and are listed in{" "}
          <code className="font-mono text-[0.9em] text-foreground/75">src/data/pdf-items.ts</code>. Every script scene
          links to the reader so you can export that scene in the same typography (print / Save as PDF).
        </p>
      </header>

      <section className="space-y-4" aria-labelledby="pdfs-documents-heading">
        <h2 id="pdfs-documents-heading" className="wall-section-title">
          Documents
        </h2>
        {pdfDocuments.length === 0 ? (
          <p className="max-w-readable text-sm leading-relaxed text-muted-foreground">
            No files registered in <code className="font-mono text-xs">pdf-items.ts</code> yet.
          </p>
        ) : (
          <ul className="grid list-none gap-6 sm:grid-cols-2 lg:gap-8">
            {pdfDocuments.map((doc) => {
              const isFile = Boolean(doc.filename);
              const href = isFile ? `/pdfs/${encodeURIComponent(doc.filename!)}` : doc.href ?? "/";
              const key = doc.filename ?? doc.href ?? doc.title;
              return (
                <li key={key}>
                  <Link
                    href={href}
                    target={isFile ? "_blank" : undefined}
                    rel={isFile ? "noopener noreferrer" : undefined}
                    className={docCardClassName}
                  >
                    <span className="font-display text-lg font-medium tracking-tight text-foreground">{doc.title}</span>
                    {doc.description ? (
                      <span className="mt-2 block font-sans text-sm leading-relaxed text-muted-foreground">
                        {doc.description}
                      </span>
                    ) : null}
                    <span className="mt-3 block font-mono text-[0.65rem] text-muted-foreground/90">
                      {isFile ? doc.filename : doc.href ?? ""}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {scriptScenes.length > 0 ? (
        <section className="space-y-10" aria-labelledby="pdfs-scenes-heading">
          <div className="max-w-2xl space-y-3">
            <h2 id="pdfs-scenes-heading" className="wall-section-title">
              Script — scenes
            </h2>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              Grouped like the reader (Act 1, 2A, 2B, Act 3). Each card jumps to that scene; use{" "}
              <span className="text-foreground/85">Download scene as PDF</span> on the Reader tab to export.
            </p>
          </div>
          <div className="space-y-12">
            {SCRIPT_ACT_BLOCK_ORDER.map((blockId) => {
              const inBlock = scriptScenes.filter((s) => sceneActBlock(s) === blockId);
              if (!inBlock.length) return null;
              return (
                <div key={blockId} className="space-y-4">
                  <h3 className="page-label">{formatActBlockNavLabel(blockId)}</h3>
                  <ul
                    className="grid list-none gap-6 sm:grid-cols-2 lg:gap-8"
                    aria-label={`Script scenes — ${formatActBlockNavLabel(blockId)}`}
                  >
                    {inBlock.map((scene) => (
                      <li key={scene.id}>
                        <ScenePdfLink scene={scene} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}
    </section>
  );
}
