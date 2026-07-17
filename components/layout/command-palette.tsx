"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { profile } from "@/content/profile";

const sections = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-ink/70 p-4 pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      <Command
        className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        label="Command palette"
      >
        <Command.Input
          autoFocus
          placeholder="Jump to a section or link..."
          className="w-full border-b border-border-soft bg-transparent px-4 py-3 font-body text-sm text-text-primary outline-none placeholder:text-text-muted"
        />
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-center text-sm text-text-muted">No results found.</Command.Empty>
          <Command.Group heading="Navigate" className="mb-1 px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-text-muted">
            {sections.map((s) => (
              <Command.Item
                key={s.href}
                onSelect={() => go(s.href)}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm text-text-secondary data-[selected=true]:bg-surface-2 data-[selected=true]:text-text-primary"
              >
                {s.label}
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Group heading="Links" className="mb-1 px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-text-muted">
            <Command.Item
              onSelect={() => go(profile.github.url)}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm text-text-secondary data-[selected=true]:bg-surface-2 data-[selected=true]:text-text-primary"
            >
              Open GitHub
            </Command.Item>
            <Command.Item
              onSelect={() => go(profile.linkedin)}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm text-text-secondary data-[selected=true]:bg-surface-2 data-[selected=true]:text-text-primary"
            >
              Open LinkedIn
            </Command.Item>
            <Command.Item
              onSelect={() => go(profile.resumeFile)}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm text-text-secondary data-[selected=true]:bg-surface-2 data-[selected=true]:text-text-primary"
            >
              Download resume
            </Command.Item>
          </Command.Group>
          <Command.Group heading="Appearance" className="px-2 py-1 font-mono text-[11px] uppercase tracking-wide text-text-muted">
            <Command.Item
              onSelect={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setOpen(false);
              }}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm text-text-secondary data-[selected=true]:bg-surface-2 data-[selected=true]:text-text-primary"
            >
              Toggle theme
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
