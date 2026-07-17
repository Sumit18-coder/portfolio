import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="border-b border-border-soft py-20 md:py-24">
      <div className="mx-auto grid max-w-page gap-14 px-6 md:grid-cols-2 md:gap-14 md:px-8">
        <Reveal>
          <div className="space-y-4">
            {profile.summary.map((p, i) => (
              <p key={i} className={i === 0 ? "text-lg text-text-primary" : "text-base text-text-secondary"}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="flex flex-col gap-3.5">
            {profile.principles.map((p) => (
              <li key={p.label} className="rounded-lg border border-border bg-surface px-4 py-3.5 font-mono text-[13px] text-text-secondary">
                <span className="font-medium text-accent">{`// ${p.label}`}</span>
                <br />
                {p.detail}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
