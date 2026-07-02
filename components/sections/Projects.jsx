"use client";

import { motion } from "framer-motion";
import {
  featuredProjects,
  formativeWorks,
  summativeWorks,
} from "@/lib/content";
import { scrollFadeUp, viewportOnce } from "@/lib/motion";
import Card from "@/components/ui/Card";

function ProjectGrid({ items, linked = false, startDelay = 0 }) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <motion.li
          key={item.title}
          custom={startDelay + index * 0.05}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scrollFadeUp}
        >
          <Card
            title={item.title}
            description={linked ? undefined : item.description}
            href={linked ? item.href : undefined}
          />
        </motion.li>
      ))}
    </ul>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-border px-6 py-24 md:px-12 md:py-32 lg:px-20"
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
          Work
        </motion.p>

        <motion.h2
          id="projects-heading"
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scrollFadeUp}
          className="font-heading text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
        >
          Projects
        </motion.h2>

        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scrollFadeUp}
          className="mt-12"
        >
          <h3 className="text-sm font-medium tracking-wide text-muted uppercase">
            Featured
          </h3>
          <ProjectGrid items={featuredProjects} startDelay={0.15} />
        </motion.div>

        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scrollFadeUp}
          className="mt-16"
        >
          <h3 className="text-sm font-medium tracking-wide text-muted uppercase">
            Coursework
          </h3>

          <div className="mt-8 space-y-12">
            <div>
              <h4 className="text-base font-medium text-foreground">
                Formative
              </h4>
              <ProjectGrid items={formativeWorks} linked startDelay={0.2} />
            </div>

            <div>
              <h4 className="text-base font-medium text-foreground">
                Summative
              </h4>
              <ProjectGrid
                items={summativeWorks}
                linked
                startDelay={0.25}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
