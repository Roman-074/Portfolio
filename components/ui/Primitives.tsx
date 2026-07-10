"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ index, children, note }: { index: string; children: ReactNode; note?: string }) {
  return (
    <div className="section-heading">
      <span className="section-index">/{index}</span>
      <h2>{children}</h2>
      <div className="heading-line" />
      {note && <span className="heading-note">{note}</span>}
    </div>
  );
}

export function TechBadge({ children }: { children: ReactNode }) {
  return <span className="tech-badge">{children}</span>;
}
