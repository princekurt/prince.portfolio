"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import { contact } from "@/lib/content";
import { scrollFadeUp, viewportOnce } from "@/lib/motion";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
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
          Contact
        </motion.p>

        <motion.h2
          id="contact-heading"
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scrollFadeUp}
          className="font-heading text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
        >
          {contact.heading}
        </motion.h2>

        <motion.p
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scrollFadeUp}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {contact.body}
        </motion.p>

        <motion.div
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scrollFadeUp}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <Button href={`mailto:${contact.email}`}>
            <Mail size={16} aria-hidden="true" />
            {contact.email}
          </Button>

          <Button
            href={contact.github.href}
            variant="ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} aria-hidden="true" />
            {contact.github.label}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
