"use client";

import { useEffect, useState } from "react";
import { site, navLinks } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/95"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-12 lg:px-20"
      >
        <a
          href="#home"
          className="text-lg font-medium tracking-tight text-foreground"
        >
          {site.monogram}
          <span className="text-accent">.</span>
        </a>

        <ul className="flex items-center gap-6 md:gap-8">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:text-foreground"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
