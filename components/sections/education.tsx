import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";

export function Education() {
  return (
    <section className="border-b border-border-soft py-20 md:py-24">
      <div className="mx-auto grid max-w-page gap-6 px-6 md:grid-cols-2 md:px-8">
        <Reveal>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="mb-3.5 font-mono text-sm font-medium text-accent">Education</h3>
            <p className="text-[15px] text-text-primary">{profile.education.degree}</p>
            <p className="mt-1 text-sm text-text-muted">{profile.education.school}</p>
            <p className="mt-1.5 font-mono text-xs text-text-muted">{profile.education.period}</p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="mb-3.5 font-mono text-sm font-medium text-accent">Certifications</h3>
            <ul className="flex flex-col gap-2.5">
              {profile.certifications.map((c) => (
                <li key={c.title} className="flex gap-2.5 text-[14.5px] text-text-secondary">
                  <span className="min-w-[40px] font-mono text-xs text-accent">{c.year}</span>
                  {c.title}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
