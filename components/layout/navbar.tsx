"use client";

import { useEffect, useState } from "react";
import { Menu, X, Command } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-40 border-b border-border-soft bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-4 md:px-8">
        <a href="#" className="font-mono text-sm font-medium text-text-primary">
          sumit<span className="text-accent">.</span>dev
        </a>

        <ul className="hidden gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "text-sm transition-colors hover:text-text-primary",
                  active === l.href ? "text-text-primary" : "text-text-secondary"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
            className="focus-ring hidden items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1.5 font-mono text-xs text-text-muted hover:border-accent hover:text-accent md:flex"
            aria-label="Open command palette"
          >
            <Command size={13} /> K
          </button>
          <ThemeToggle />
          <a
            href={profile.resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring hidden rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text-primary hover:border-accent md:inline-block"
          >
            Resume
          </a>
          <button
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-text-secondary md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border-soft px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setMobileOpen(false)} className="text-sm text-text-secondary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  );
}
