/**
 * Entry for the PDF index — either a file in `public/pdfs/` or an in-app page
 * (e.g. script reader with print-to-PDF).
 */
export type PdfItem = {
  title: string;
  description?: string;
  /** File under `public/pdfs/`. */
  filename?: string;
  /** In-app route (e.g. `/script` for reader + Download PDF). */
  href?: string;
};
