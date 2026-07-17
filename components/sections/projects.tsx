"use client";

import { useState } from "react";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ChevronDown, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export function Projects() {
  const [openSlug, setOpenSlug] = useState<string | null>(profile.projects[0]?.slug ?? null);

  return (
    <section id="projects" className="border-b border-border-soft py-20 md:py-24">
      <div className="mx-auto max-w-page px-6 md:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="Three full-stack builds, each pushing on a different backend concern."
        />
        <div className="flex flex-col gap-5">
          {profile.projects.map((project, i) => {
            const open = openSlug === project.slug;
            return (
              <Reveal key={project.slug} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-surface p-6 md:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-medium text-text-primary">{project.title}</h3>
                    <div className="flex gap-2.5">
                      <a
                        href={project.github}
                        className="focus-ring flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-[13px] text-text-secondary hover:border-accent hover:text-accent"
                      >
                        <Github size={14} /> GitHub
                      </a>
                      <a
                        href={project.demo}
                        className="focus-ring flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-[13px] text-text-secondary hover:border-accent hover:text-accent"
                      >
                        <ExternalLink size={14} /> Live demo
                      </a>
                    </div>
                  </div>

                  <p className="mt-3.5 max-w-2xl text-[15px] text-text-secondary">{project.description}</p>

                  <button
                    onClick={() => setOpenSlug(open ? null : project.slug)}
                    className="focus-ring mt-4 flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-accent"
                    aria-expanded={open}
                  >
                    <ChevronDown size={14} className={cn("transition-transform", open && "rotate-180")} />
                    {open ? "Hide architecture notes" : "Show architecture notes"}
                  </button>

                  {open ? <p className="mt-3 max-w-2xl text-sm text-text-secondary">{project.details}</p> : null}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
