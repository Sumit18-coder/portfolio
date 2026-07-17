import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section id="experience" className="border-b border-border-soft py-20 md:py-24">
      <div className="mx-auto max-w-page px-6 md:px-8">
        <SectionHeading eyebrow="Career so far" title="Experience" />
        <div className="relative pl-7">
          <div className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-border" aria-hidden="true" />
          {profile.experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05}>
              <div className="relative mb-7 last:mb-0">
                <span className="absolute -left-7 top-1 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                <p className="mb-1.5 font-mono text-xs text-text-muted">
                  {job.period} · {job.location}
                </p>
                <h3 className="font-display text-lg font-medium text-text-primary">{job.company}</h3>
                <p className="mb-2.5 mt-0.5 text-sm text-accent">{job.role}</p>
                <ul className="list-disc space-y-1.5 pl-4 text-[14.5px] text-text-secondary">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
