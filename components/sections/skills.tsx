import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Skills() {
  return (
    <section id="skills" className="border-b border-border-soft py-20 md:py-24">
      <div className="mx-auto max-w-page px-6 md:px-8">
        <SectionHeading
          eyebrow="Stack"
          title="Technical skills"
          description="The tools I reach for most, grouped by where they sit in the stack."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {profile.skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-border bg-surface p-5">
                <h3 className="mb-4 font-mono text-sm font-medium text-accent">{group.category}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border-soft bg-surface-2 px-2.5 py-1 text-[13px] text-text-secondary"
                    >
                      {item}
                    </li>
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
