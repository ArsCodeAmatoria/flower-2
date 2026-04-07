"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { flowerEase } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

const items = [
  { href: "/script", title: "Script", description: "Reader & scenes" },
  { href: "/characters", title: "Characters", description: "Dossiers" },
  { href: "/sets", title: "Sets", description: "World design" },
  { href: "/lyrics", title: "Lyrics", description: "Songs & playback" },
  { href: "/pdfs", title: "PDFs", description: "Documents" },
] as const;

export function ExhibitionNavCards({ className }: { className?: string }) {
  return (
    <nav className={cn("border-t border-border/35 pt-12", className)} aria-label="Exhibition rooms">
      <p className="page-label mb-6">Continue</p>
      <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
        {items.map((item, index) => (
          <motion.li
            key={item.href}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.42,
              delay: 0.08 + index * 0.05,
              ease: flowerEase,
            }}
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.997 }} transition={{ duration: 0.4, ease: flowerEase }}>
              <Link
                href={item.href}
                className="block rounded-sm border border-border/45 bg-surface/20 px-4 py-4 shadow-frame-inset transition-[border-color,background-color,box-shadow] duration-subtle ease-exhibition hover:border-border/55 hover:bg-surface/35 hover:shadow-[inset_0_0_0_1px_hsl(var(--accent)/0.1)]"
              >
                <span className="font-display text-[1.05rem] font-medium tracking-tight text-foreground">
                  {item.title}
                </span>
                <span className="mt-1.5 block font-sans text-[0.8125rem] leading-snug text-muted-foreground">
                  {item.description}
                </span>
              </Link>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
