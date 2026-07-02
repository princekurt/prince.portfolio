"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/content";
import { scrollFadeUp, viewportOnce } from "@/lib/motion";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-border bg-surface px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scrollFadeUp}
          className="mb-4 text-sm font-medium tracking-wide text-accent uppercase"
        >
          About
        </motion.p>

        <motion.h2
          id="about-heading"
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scrollFadeUp}
          className="font-heading text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
        >
          {about.heading}
        </motion.h2>

        <motion.p
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scrollFadeUp}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {about.body}
        </motion.p>
      </div>
    </section>
  );
}
