"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { withBasePath } from "@/lib/basePath";
import { site } from "@/lib/content";
import Button from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center px-6 pt-24 pb-16 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="max-w-xl">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-4 text-sm font-medium tracking-wide text-accent uppercase"
          >
            Portfolio
          </motion.p>

          <motion.h1
            id="hero-heading"
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]"
          >
            Hello, I&apos;m{" "}
            <span className="text-accent">{site.shortName}</span>
          </motion.h1>

          <motion.p
            custom={0.2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-4 text-lg leading-relaxed text-muted sm:text-xl"
          >
            {site.title}
          </motion.p>

          <motion.p
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-md text-base leading-relaxed text-muted"
          >
            {site.description}
          </motion.p>

          <motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8"
          >
            <Button href="#projects">
              See my work
              <ArrowDown size={16} aria-hidden="true" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto lg:mx-0"
        >
          <div className="relative size-56 overflow-hidden rounded-lg border border-border sm:size-64 lg:size-72">
            <Image
              src={withBasePath("/profile_pic.jpg")}
              alt={`Portrait of ${site.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 256px, 288px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
