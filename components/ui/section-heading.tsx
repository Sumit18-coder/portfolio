export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-text-primary">{title}</h2>
      {description ? <p className="mt-3 text-base text-text-secondary">{description}</p> : null}
    </div>
  );
}
