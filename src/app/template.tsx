"use client";

import { motion } from "framer-motion";
import { flowerEase } from "@/lib/motion-presets";

/**
 * Soft page veil on route change — fast, readable, not a “transition screen”.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0.94 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.34, ease: flowerEase }}
    >
      {children}
    </motion.div>
  );
}
