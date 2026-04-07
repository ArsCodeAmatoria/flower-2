import Link from "next/link";
import { pdfDocuments } from "@/data/pdf-items";
import { exhibitionPageLabels } from "@/components/layout/exhibition-layout";

export default function PdfsPage() {
  return (
    <section className="space-y-12 md:space-y-16">
      <header className="max-w-2xl space-y-4">
        <p className="page-label">
          {exhibitionPageLabels.pdfs.suite} / {exhibitionPageLabels.pdfs.facet}
        </p>
        <h1 className="title-display">PDFs</h1>
        <p className="subtitle">
          Production packets, lookbooks, and reference sheets. Files live in{" "}
          <code className="font-mono text-[0.9em] text-foreground/75">public/pdfs/</code>; add entries in{" "}
          <code className="font-mono text-[0.9em] text-foreground/75">src/data/pdf-items.ts</code>.
        </p>
      </header>

      {pdfDocuments.length === 0 ? (
        <p className="max-w-readable text-sm leading-relaxed text-muted-foreground">
          No PDFs registered yet. Drop files into <code className="font-mono text-xs">public/pdfs/</code> and list
          them in <code className="font-mono text-xs">pdf-items.ts</code> to show download links here.
        </p>
      ) : (
        <ul className="grid list-none gap-6 sm:grid-cols-2 lg:gap-8" aria-label="PDF documents">
          {pdfDocuments.map((doc) => (
            <li key={doc.filename}>
              <Link
                href={`/pdfs/${encodeURIComponent(doc.filename)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-panel border border-border/40 bg-surface/15 p-6 shadow-frame-inset transition-subtle hover:border-border/55 hover:bg-surface/25"
              >
                <span className="font-display text-lg font-medium tracking-tight text-foreground">{doc.title}</span>
                {doc.description ? (
                  <span className="mt-2 block font-sans text-sm leading-relaxed text-muted-foreground">
                    {doc.description}
                  </span>
                ) : null}
                <span className="mt-3 block font-mono text-[0.65rem] text-muted-foreground/90">{doc.filename}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
