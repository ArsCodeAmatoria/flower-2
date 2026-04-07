/** Register a file placed in `public/pdfs/` for the PDF index. */
export type PdfItem = {
  filename: string;
  title: string;
  description?: string;
};
