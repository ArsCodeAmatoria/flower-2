"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { flower, flowerEase } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

const mainVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: flower.stagger.staggerChildren,
      delayChildren: flower.stagger.delayChildren,
    },
  },
};

const mainItem = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: flowerEase },
  },
};

export function ExhibitionMainReveal({
  pageLabel,
  children,
  mainClassName,
}: {
  pageLabel: ReactNode;
  children: ReactNode;
  mainClassName?: string;
}) {
  return (
    <motion.div
      className={cn("min-w-0 space-y-8 lg:space-y-10", mainClassName)}
      variants={mainVariants}
      initial="hidden"
      animate="show"
    >
      {pageLabel ? <motion.div variants={mainItem}>{pageLabel}</motion.div> : null}
      <motion.div variants={mainItem} className="space-y-8">
        {children}
      </motion.div>
    </motion.div>
  );
}

export function ExhibitionSidebarReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="exhibition-sidebar-inner space-y-8"
      initial={{ opacity: 0, x: 14 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: flower.sidebar.duration,
        delay: flower.sidebar.delay,
        ease: flowerEase,
      }}
    >
      {children}
    </motion.div>
  );
}
