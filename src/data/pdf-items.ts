import type { PdfItem } from "@/types/pdf-item";

/**
 * Drop files into `public/pdfs/` and append entries here for the PDF index.
 */
export const pdfDocuments: PdfItem[] = [
  {
    title: "Screenplay — full draft",
    description:
      "Script reader in site typography. Full draft: Download PDF on the reader. One scene: Reader tab → Download scene as PDF. Then Print → Save as PDF.",
    href: "/script",
  },
];
